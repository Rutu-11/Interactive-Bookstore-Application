import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./Auth.Reducer";

const rootReducer = combineReducers({
    auth : authReducer,
    // homeVideos : homeVideoReducer,
    // selctedVideo : selectedVideoReducer,
    // channelDetails: channelDetailReducer,
    // commentsList : commentListReducer,
    // relatedVideos : relatedVideoReducer,
    // searchVideos : searchVideosReducer
  })
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;