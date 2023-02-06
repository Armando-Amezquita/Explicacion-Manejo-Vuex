export const profile = {
    state(){
        return{
            username: 'Armando Amezquita',
        }
    },
    getters: {
        firstName(state){
            return state.username.split(' ')[0]
        }
    },
    mutations: {
        updateUsername(state, payload){
            console.log('payload', payload)
            state.username = payload
        },
    },
    actions: {
        actualizarNombre({commit, state}, payload){
            commit('updateUsername', payload)
        },
    },
}