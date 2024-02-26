import axios from 'axios'

const API= 'http://localhost:3000/api'

export const registerRequest = (user) => axios.post(`${API}/register`, user)
export const registerProductRequest = (user) => axios.post(`${API}/registerProducto`, user)
export const registerProvedorRequest = (user) => axios.post(`${API}/registerProvedor`, user)

