import { getImages } from "@/api"

export const about = {
    namespaced: true,
    state(){
        return{
            images: []
        }
    },
    getters: {
        firstName(state){
            return state.username.split(' ')[0]
        }
    },
    mutations: {
        LlenarItems(state, payload){
            console.log('payload', payload)
            state.images = payload
        },
    },
    actions: {
        cargarImagenes: async ({commit}) =>{
            const response = await getImages();
            console.log('response', response);
            commit('LlenarItems', response);
        }
    },
}