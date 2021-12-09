export const setUser = (user) => {
    return {
        type: "USER",
        payload: user
    }
}

export const loggedUser = (user) => {
    return {
        type: "LOGGED_USER",
        payload: user
    }
}