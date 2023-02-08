export const messages = {
    namespaced: true,
    state(){
        return{
            messagesChats: [
                { id: 1, author: 1, message: 'Hola 👀', timestamp: new Date().toLocaleTimeString(), channel: 1},
                { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString(), channel: 2},
                { id: 1, author: 1, message: 'Hola 👀', timestamp: new Date().toLocaleTimeString(), channel: 2},
            ],
        }
    },
    getters: {
        getMessages: (state) => (channel) => {
            return state.messagesChats.filter(msg => msg.channel === parseInt(channel));
        }
    },
    mutations: {
    },
    actions: {
    },
}