export const state = () => (
    {
        user_info: null,
    }
)
export const getters = {
    getUserInfo(state) {
        return state.user_info
    }
}
export const mutations = {
    storeUserInfo(state, payload) {
        state.user_info = payload
    },

}