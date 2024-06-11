import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './redux/userRedux';
import { companyReducer } from './redux/companyRedux';


const store = configureStore({
    reducer: {
        user: userReducer,
        company:companyReducer
    }
})
export default store;
export const server = "https://vvpbackend.onrender.com/api/v1"