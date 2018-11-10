import React, {Component} from 'react'
import axios from 'axios'
import UserLayout from './UserLayout'
const userAxios = axios.create();



userAxios.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token");
    config.headers.Autherization = `Programming${token}`;
    return config;
});

const UserAPI = React.createContext();
// Import Pages





export class UserAPIProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            email: JSON.parse(localStorage.getItem("email"))||{},
            token: localStorage.getItem("token")||""
        };

    }componentDidMount(){
        this.getUserAPI()
    }
    getUserAPI =() =>{
        return axios.get('/api/userinfo')
            .then(response => {
               this.setState({results: response.data})
                return response;
            })
    }
    userInfoDelete(userInfo_id){
        return axios.delete('/api/userinfo/'+userInfo_id)
            .then(response => {
                this.setState(prevState => {
                    return{results: prevState.results.filter(result => result._id !== userInfo_id)}
                })
            })
    }
    signup = (userInfo) =>{
        return axios.post("auth/Signup", userInfo)
            .then(response =>{
                const{email, token} = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("email", JSON.stringify(email));
                this.setState({
                    email,
                    token
                });
                return response
            })
    };
    login = (credentials) =>{
        return axios.post("/auth/Login", credentials)
            .then(response =>{
                const{token, email} = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("email", JSON.stringify(email));
                this.setState({
                    email,
                    token
                });
                this.getUserAPI();
                return response
            })
    };
    logout = () =>{
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        this.setState({
            results:[],
            email:{},
            token:""
        })
    };
    render(){

        const userInfo = this.state.results;

        return(

           <UserAPI.Provider
            value={{
                getUserAPI: this.getUserAPI,
                userDelete: this.userInfoDelete,
                signup: this.signup,
                login: this.login,
                logout: this.logout

            }}
           >

               {this.props.children}
           </UserAPI.Provider>
        )
    }
}

export const withContext = Component =>{
    return props => {
        return (
            <UserAPI.Consumer>
                {
                    globalState => {
                        return(
                            <Component
                                {...globalState}
                                {...props}/>
                        )
                    }
                }
            </UserAPI.Consumer>
        )
    }
};

export default withContext(UserAPIProvider)