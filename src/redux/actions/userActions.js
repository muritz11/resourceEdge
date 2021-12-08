

export const setUser = (user) => {
    return {
        type: "USER",
        payload: user
    }
}

export const selectedUser = (userId) => {
    return {
        type: "SELECTED_USER",
        payload: userId
    }
}