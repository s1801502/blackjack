import { createStore, combineReducers } from 'redux';
import peliReducer from '../reducers/peliReducer';
import vuorotReducer from '../reducers/vuorotReducer';

export default () => {
    const store = createStore(combineReducers({
        peli: peliReducer,
        vuorot: vuorotReducer 
        })
    );

    return store;
    
}
