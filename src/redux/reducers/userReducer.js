// import { dishActionTypes } from "../constants/dish-action-types";

const initialState = {
    users: [
        {
            name: "Ositadinma Nwangwu",
            email: "o.nwangwu@genesystechhub.com",
            password: ""
        }
    ]
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        // case userActionTypes.SET_USER:
        //     return {...state, dishes: payload};
    
        default:
            return state;
    }
}

// export const selectedUserReducer = (state={}, {type, payload}) => {
//     switch (type) {
//         case userActionTypes.SELECTED_USER:
//             return {...state, payload}
    
//         default:
//             return state
//     }
// }