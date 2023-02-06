export const getImages = async() => {
    try {
        const setting = { method: 'GET' } 
        const url = 'https://picsum.photos/v2/list?page=2&limit=10';
        const data = (await fetch(url, setting)).json();
        return data;
        
    } catch (error) {
        console.log("Ocurrio un error",error);
    }
} 
