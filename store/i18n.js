export const strict = false
export const state = () => ({
    locales: ['en', 'jp'],
    locale: 'en',
});

export const actions = {
    setLang({ commit }, data) {
        commit('SET_LANG', data);
    }
};

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },
};

