export const state = () => (
    {
        token: {
            token_id: null,
            expire: 24
        }
    }
)

export const getters = {
    isauthenticated(state) {
        return state.token.token_id !== null;
    },
    getToken(state) {
        return state.token.token_id
    }
}

export const mutations = {
    storeToken(state, payload) {
        state.token.token_id = payload
    },
    removeToken(state) {
        state.token.token_id = null
    }
}