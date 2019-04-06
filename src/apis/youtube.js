import axios from 'axios';


const KEY = 'AIzaSyA8zr_2eKsnYj1DuZMFQw7uv4YPd-Yd-L0';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
})