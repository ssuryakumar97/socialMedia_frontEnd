import axios from "axios"

// const base_url = "http://localhost:5000/api"
const base_url = "https://socialmedia-backend-ojgy.onrender.com/api"


console.log()
const token = localStorage.getItem("persist:root") == null || JSON.parse(localStorage.getItem("persist:root")).currentUser == "null" ?"": JSON.parse(JSON.parse(localStorage?.getItem("persist:root"))?.user)?.currentUser?.token


export const publicRequest = axios.create({
    baseURL: base_url
})

export const userRequest = axios.create({
    baseURL: base_url,
    headers: {
        "Authorization": `Bearer ${token}`
    }
})


