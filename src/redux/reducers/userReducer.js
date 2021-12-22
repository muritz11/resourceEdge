
const initialState = {
    users: [
        {
            name: "Ositadinma Nwangwu",
            email: "o.nwangwu@genesystechhub.com",
            password: ""
        },
        {
            name: "A. Maurice",
            email: "test@test.com",
            password: ""
        }
    ]
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_PWD":
            return state.users[0].password = payload;
    
        default:
            return state;
    }
}

export const loggedUserReducer = (state={}, {type, payload}) => {
    switch (type) {
        case "LOGGED_USER":
            return payload
    
        default:
            return state
    }
}