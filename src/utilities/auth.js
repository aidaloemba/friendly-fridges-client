import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

export const signup = (user)=>{
    return axios({
        method: "POST",
        url: "signup",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(user),
    })
    .then((response)=> {        
        setUser(response.data);
    })
}

export const login = (user) => {
    return axios({
        method: "POST",
        url: "login",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(user),
    })
        .then((response) => {
            setUser(response.data)
        })
}

export const logout = () => {
    return axios.get("/logout")
        .then(() => {
            clearUser()
        })
}

export const setUser = (user)=> {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = (user)=> {
    return JSON.parse(window.localStorage.getItem("user"), user);
}

export const clearUser = (user) => {
    window.localStorage.removeItem('user', user)
}