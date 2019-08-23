import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAnuwoONjajc701oTcJ3uBpLmJqbKRBmqw",
  authDomain: "fate-shop.firebaseapp.com",
  databaseURL: "https://fate-shop.firebaseio.com",
  projectId: "fate-shop",
  storageBucket: "",
  messagingSenderId: "173396173325",
  appId: "1:173396173325:web:b8f159d5d4223c49"
};

// 创建登陆账户
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`); // 查找是否已存在，无论存在与否都返回一个 对象引用
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// 通过代码 给 firebase 添加数据 否则需要再 firebase 添加（比较麻烦）
export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const firestore = firebase.firestore();
  const collectionRef = firestore.collection(collectionKey); // 如果找不到则  创建一个集合
  // const documentRef = collectionRef.doc();

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); // 自动创建空文档
    batch.set(newDocRef, obj); // batch: 批量， 批量生成空文档，并添加数据
  });

  return await batch.commit(); // 提交的事物， 返回 promise， 成功返回message null
};

export const convertCollectsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// 模拟后端请求 用户 数据
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe(); // 不知道啥用处
      // console.log(userAuth);
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); // 我猜是因为 createUserProfileDocument 是函数表达式， 所以变量作用域提升优先于 函数表达式， 所以可以获取 firestore
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

export default firebase;
