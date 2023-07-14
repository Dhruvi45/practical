import { allReducer } from './Reducer/index';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

const componentEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducer, {}, componentEnhancers(applyMiddleware(ReduxThunk)));

export default store;
