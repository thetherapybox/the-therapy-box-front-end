
export const SET_USER_TOKEN = "SET_USER_TOKEN"

const setUserTokenAction = (token) => ({
    type: SET_USER_TOKEN,
    token: token
})

export default setUserTokenAction