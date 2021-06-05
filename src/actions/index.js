export const increment = (number = 1) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}
