
const initialState = {
    users: [
        {
            name: "Ositadinma Nwangwu",
            email: "o.nwangwu@genesystechhub.com",
            password: ""
        }
    ]
}

export const userReducer = (state = initialState, {type}) => {
    return state
}

export const loggedUserReducer = (state={}, {type, payload}) => {
    switch (type) {
        case "LOGGED_USER":
            return payload
    
        default:
            return state
    }
}