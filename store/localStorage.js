export const state = () => (
    {
        token_id: null,
    }
)

export const getters = {
    isauthenticated(state) {
        return state.token_id !== null;
    }
}

export const mutations = {
    storeToken(state, payload) {
        state.token_id = payload
    }
}