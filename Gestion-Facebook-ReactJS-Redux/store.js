import { createStore } from 'redux';
import prodactPost from './reducers';

const store = createStore(prodactPost);

export default store;