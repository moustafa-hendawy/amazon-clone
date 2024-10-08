
export const initialState = {
    basket: [],
    user: null
}
//for calculation the total price
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // let newBasket = [...state.basket];
            // newBasket.splice(action.index, 1);
            // return { ...state, basket: newBasket };
            // return {...state, basket: state.basket.filter(item => item.index !== action.id)};
            const index = state.basket.findIndex((basketItem) =>
                (basketItem.id === action.id)
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`warn ${action.id}`);
            }
            return {
                ...state, basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state, user: action.user

            }
        case 'EMPTY_BASKET':
            return {
                ...state, basket: []
            }

        default:
            return state;
    }
}