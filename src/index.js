
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppRouter from './routes/routes';
import { Provider } from 'react-redux';



import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore/configureStore';


const store = configureStore();
store.subscribe(() => {
    //const state = store.getState();
    //console.log(state.vuorot.peliLoppu);
    

});
//console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
