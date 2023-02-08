export const channels = {
    namespaced: true,
    state(){
        return{
            channelsChats: [
                { id: 1, name: 'General', messages: 27 },
                { id: 2, name: 'Emergencias', messages: null },
                { id: 3, name: 'Anuncios', messages: 2 },
                { id: 4, name: 'Proyecto 1', messages: 24 },
                { id: 5, name: 'Non-work', messages: null },
                { id: 6, name: 'Atención a clientes', messages: 120 }
            ],
        }
    },
    getters: {
        getChannels: (state) => (search) => {
            // console.log('state.channelsChats', state.channelsChats)
            // console.log('state.channelsChats', state.channelsChats.length)
            return state.channelsChats.filter(channel => channel.name.toLowerCase().includes(search.toLowerCase()));
        },
        getChannel: (state) => (id) => {
            return state.channelsChats.filter(channel => channel.id === parseInt(id))
        }
    },
    mutations: {
    },
    actions: {
    },
}