import { productService } from '../_services';

export const products = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            productService.getAll()
                .then(
                    products => commit('getAllSuccess', products),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, products) {
            state.all = { items: products };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
};