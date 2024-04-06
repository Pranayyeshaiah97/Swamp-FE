import { configureStore } from '@reduxjs/toolkit';
// Import reducers
import userReducer from './reducers/userReducer';


const store = configureStore({
    reducer: {
        user: userReducer,
        // Add other reducers as needed
    },
});

export default store;