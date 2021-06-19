import axios from 'axios'

const URL = ''

class AuthService {
    login(email, password){
        return axios.post(URL, {
            email, password
        }).then(Response => {
            if(Response.data.access){
                localStorage.setItem('user', JSON.stringify(Response.data.access))
            }
            return Response.data;
        })
    }
    logout(){
        localStorage.removeItem('user')
    }
    isAuthenticated(){
        return localStorage.getItem('user') != null;
    }
}
export default new AuthService();