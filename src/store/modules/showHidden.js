const state = {
    showHidden: true
};
const mutations = {
    setExampleShow(state, showHidden) {
        state.showHidden = showHidden;
    }
};
const actions = {
    setExampleShow({ commit }, showHidden) {
        commit('setExampleShow', showHidden);
    }
};
export default {
    state,
    mutations,
    actions
};
