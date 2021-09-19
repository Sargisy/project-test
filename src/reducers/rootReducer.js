import categoriesReducer from './CategoriesReducer';
import imagesReducer from './imagesReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const appReducer = combineReducers({
    categories:categoriesReducer,
    images:imagesReducer
  });
  
  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };
  
  export default rootReducer;

