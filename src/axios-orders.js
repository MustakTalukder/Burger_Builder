import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-builder-f154c.firebaseio.com/'
})

export default instance 