import axios from 'axios'

const instance = axios.create({
    baseURL: "https://moulik-whatsapp.herokuapp.com/",
})

export default instance;