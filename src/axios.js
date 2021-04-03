import axios from 'axios'
//axios for req to a server

//frontend-> Backend(server[tmdb])
//API key-authentication, comon get post give me some movies

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;

