import {createStore} from "@reduxjs/toolkit";
import reducers from './reducers';
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({reducer: productReducer})

export default createStore(reducers)