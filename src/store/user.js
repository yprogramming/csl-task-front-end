import axios from 'axios'
import srv from '@/config/conf.js';
import router from '@/router';
const userModule = {
    namespaced: true,
    state: {
        profile: {},
        loading: false,
        user: [],
        responseLogin: {}
    },
    mutations: {
        setLoading(state, val) {
            state.loading = val
        },
        setProfile(state, profile) {
            state.profile = profile
        },
        setUser(state, user) {
            state.user = user
        },
        setResponseLogin(state, response) {
            state.responseLogin = response
        }
    },
    actions: {
        setLoading(context, val) {
            context.commit('setLoading', val)
        },
        setProfile(context, profile) {
            context.commit('setProfile', profile)
        },
        setResponseLogin(context, val) {
            context.commit('setResponseLogin', val)
        },
        doResponseLogin(context) {
            context.commit('setResponseLogin', {});
        },
        doLogin(context, user) {
            context.commit('setLoading', true);
            axios.post(srv['url'] + '/api/login”',
                    user, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then((res) => {
                    context.commit('setLoading', false);
                    var response = res['data'];
                    if (response['id'] && response['createdAt']) {
                        window.localStorage.setItem('res', JSON.stringify(response))
                        router.push({
                            path: '/profile'
                        });
                    } else {
                        context.commit('setResponseLogin', {
                            message: "login fialed",
                            res: response
                        });
                    }
                })
                .catch(() => {
                    context.commit('setLoading', false);
                    window.localStorage.clear();
                    context.commit('setResponseLogin', { success: false, code: 500, message: 'Connection failed' });
                });
        },
        doRegister(context, { user }) {
            return axios.post(srv['url'] + '/api/register',
                user, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        },
        doUpdateUser(context, { user }) {
            return axios.put(srv['url'] + '/api/users',
                user, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        },
        doDeleteUser(context, { user }) {
            return axios.delete(srv['url'] + '/api/users',
                user, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        },

        getProfile(context) {
            axios.get(srv['url'] + '/api/users/2', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                var response = res['data'];
                context.commit('setProfile', response['data'])
            });
        },
        getUser(context) {
            axios.get(srv['url'] + '/api/users', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                var response = res['data'];
                context.commit('setUser', response['data']);
            });
        }
    },
    getters: {
        lding: state => state.loading,
        profile: state => state.profile,
        users: state => state.user,
        loginResponse: state => state.responseLogin
    }
};

export default userModule;