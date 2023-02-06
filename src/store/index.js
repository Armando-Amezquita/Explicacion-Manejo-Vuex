import { createStore } from 'vuex'
import { getImages } from '../api'
import { profile } from './modules/user'
import { about } from './modules/about'

const store = createStore({
    // State => Retorna todas las variables de estado que se utilicen de forma global.
    // Donde se vaya a utilice alguna variable del store, no es necesario importarlo, ya que vue lo hace en el main. 
    // Solo se utilizaria ===> $store.state.username => en el componente o etiqueta. ejemplo en Home.vue en Prolife.card.
      //:username="$store.state.username"
        
    // state(){
    //     return{
    //         username: 'Armando Amezquita',
    //         images: []
    //     }
    // },

    // // Getters => Es la manera en como se puede cambiar o modificar alguna variable del estado, puede recibir data de donde se este utilizando, se importa igual que state.  
    // // getters: {
	// // 	resultado(state) = (c) => {
	// // 		return (param) => /* Procesar state.variable usando param; */;
	// // 	},
	// // }
    // getters: {
    //     firstName(state){
    //         return state.username.split(' ')[0]
    //     }
    // },

    // // Mutations => Es la manera en como modificar el estado recibiendo un payload. 
    // // Ejemplo en el archivo ProfileView.vue
    // mutations: {
    //     updateUsername(state, payload){
    //         console.log('payload', payload)
    //         state.username = payload
    //     },
    //     LlenarItems(state, payload){
    //         console.log('payload', payload)
    //         state.images = payload
    //     },
    // },

    // // Ejemplo en el archivo AboutView.vue
    // actions: {
    //     actualizarNombre({commit, state}, payload){
    //         console.log('updaye', state.username, payload)
    //         commit('updateUsername', payload)
    //     },

    //     cargarImagenes: async ({commit}) =>{
    //         const response = await getImages();
    //         console.log('response', response);
    //         commit('LlenarItems', response);
    //     }
    // },

    modules: {
        profile,
        about
    }
})

/* 
    Hay varias maneras de importar el estado en el componente que se necesite 
    computed: {
    foo(){},
        Asi se utiliza mapState si se necesita tener mas propiedades computadas
        ...mapState({
	        1. username: (state) => state.username
        })
        2. ...mapState(['username']) => ya en la etiqueta => <p> {{ username }} </p> 
        3. :username="$store.state.username"
  }
*/

export default store