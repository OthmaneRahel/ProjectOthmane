import { createStore } from 'redux';
import ReducerContacts from './reducers';

const store = createStore(ReducerContacts);

export default store;