// src/store.js
import { createStore } from 'redux';

const initialState = {
    companies: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMPANY':
            return { ...state, companies: [...state.companies, action.payload] };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;