import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization :'Client-ID fl6Ut2tc6o1DbfsRuRXIGrL9CGa3skqXb5oYAtK2s5c'
    }
});