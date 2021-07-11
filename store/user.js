export const state = () => ({
    profile_info: null
})

export const getters = {
    getProfileInfo(state) {
        return state.profile_info
    }
}

export const mutations = {
    storeProfileInfo(state, payload) {
        state.profile_info = payload
    }
}