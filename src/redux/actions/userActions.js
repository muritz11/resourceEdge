export const setUser = (user) => {
    return {
        type: "USER",
        payload: user
    }
}

export const setPassword = (password) => {
    return {
        type: "SET_PWD",
        payload: password
    }
}

export const loggedUser = (user) => {
    return {
        type: "LOGGED_USER",
        payload: user
    }
}