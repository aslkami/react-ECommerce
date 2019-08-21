import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider
} from "../../firebase/firebase.utils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess
} from "./user.actions";
import UserActionTypes from "./user.types";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    ); // 验证瀛湖是否存在，存在返回相关信息
    const userSnapshot = yield userRef.get();
    // console.log(user);
    // console.log(userRef);
    // console.log(userSnapshot);
    yield put(signInSuccess(userSnapshot));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user); // 因为在上面的方法里，也有可能发生错误，故此可以沿用 try catch
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOutAsync() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* signUpAsync({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* signInAfterSignUpAsync({ payload: { user, additionalData } }) {
  try {
    yield getSnapshotFromUserAuth(user, additionalData);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* googleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* signWithEmail() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* signOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutAsync);
}

export function* signUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpAsync);
}

export function* signInAfterSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUpAsync);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(signWithEmail),
    call(isUserAuthenticated),
    call(signOutStart),
    call(signUpStart),
    call(signInAfterSignUp)
  ]);
}

// 通过前端调用 action 触发 rootSaga存储的 userSagas的方法， 如果找到对应的 action， 则触发第二个参数的方法
// 本来是 action 直接传到 reducer， 现在需经过 saga 中间件 ， 最后再返回 reducer
// put 相当于 dispatch 作用
// 如果有关联的 action 同样需要加入到 rootSagas 里去， 不然无法联动执行 如 signUpStart， signInAfterSignUp
