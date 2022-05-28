import axios from 'axios'


export async function authUser(email, password) {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth`, { email: email, password: password })
    return response.data
}

export async function getMe(token) {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/me`, {
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    return response.data
}

