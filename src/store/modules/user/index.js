export const profile = {
    namespaced: true,
    state(){
        return{
            username: '',
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
        actualizarNombre({commit, state, rootState}, payload){
            //rootState => permite acceder al estado raiz e invocar lo que necesite de allí, acceder a variables del estado raiz, o a variables del cualquier otro modulo de estado
            // console.log('rootStateAbout', rootState.about)
            commit('updateUsername', payload)
            if(state.username){
                //setStatus => mutation que se creo en el estado raiz
                //'active' => payload que va a llevar al estado raiz
                // {root: true} => Es lo que permite ejecutar una accion o mutation del estado global
                commit('setStatus', 'active', {root: true});
                console.log('rootState', rootState.status)
            }
        },
    },
}