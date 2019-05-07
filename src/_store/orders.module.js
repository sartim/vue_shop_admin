import { orderService } from '../_services';

export const orders = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            orderService.getAll()
                .then(
                    orders => commit('getAllSuccess', orders),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, orders) {
            state.all = { items: orders };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
};