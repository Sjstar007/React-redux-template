// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import statisticsSlice from './slice';
// Import your reducers here
// import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    // counter: counterReducer,
    firstApiCalll: statisticsSlice
  },
});

export default store;
