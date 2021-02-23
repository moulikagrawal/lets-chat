import axios from 'axios'

const instance = axios.create({
    baseURL: "https://moulik-whatsapp-backend.herokuapp.com/",
})

export default instance;