import { common } from './constants';


export const commonReducer = (
    state = {
        isLoading: false,
        isError: false,
        message: '',
        productlist: [],
        productdata: []
    },
    action
) => {
    switch (action.type) {
        case common.toggleLoading:
            return { ...state, isLoading: action.payload };
        case common.updateproductlist:
            return { ...state, productlist: action.payload };
        case common.addproductdata:
            return { ...state, productdata: [...state.productdata, ...[action.payload]] };
        case common.error:
            return {
                ...state,
                isError: action.payload.isError,
                message: action.payload.message
            };
        default:
            return state;
    }
};