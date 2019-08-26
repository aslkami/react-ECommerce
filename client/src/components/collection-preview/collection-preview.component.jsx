// import React from "react";
// import { withRouter } from "react-router-dom";
// import CollectionItem from "./../collection-item/collection-item.component";
// import "./collection-preview.styles.scss";

// const CollectionsPreview = ({ title, items, match, history }) => {
//   return (
//     <div className="collection-preview">
//       <h1
//         className="title"
//         onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
//       >
//         {title}
//       </h1>
//       <div className="preview">
//         {items
//           .filter((val, idx) => idx < 4)
//           .map(item => (
//             <CollectionItem key={item.id} item={item} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default withRouter(CollectionsPreview);

import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
