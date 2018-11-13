import React, {Component} from 'react'
import axios from 'axios'

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
            userinfo: JSON.parse(localStorage.getItem('userinfo')) || {},
            token: localStorage.getItem('token') || ''
        };

    }componentDidMount(){
        this.getUserAPI()
    }

    getUserAPI =() =>{
        return axios.get('/api/userinfo')
            .then(response => {
                this.setState({
                    results: response.data.map((developer, i) => {
                        if( i === 0) developer.selected = true;
                        developer.selected = false;
                        return developer;
                    })
                })
                return response;
            })
    };

    userInfoDelete(userInfo_id){
        return axios.delete('/api/userinfo/'+ userInfo_id)
            .then(response => {
                this.setState(prevState => {
                    return{results: prevState.results.filter(result => result._id !== userInfo_id)}
                })
            })
    }

    accountCreate = (userInfo) =>{
        return axios.post("/auth/AccountCreate", userInfo)
            .then(response =>{
                const{userinfo, token} = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("userinfo", JSON.stringify(userinfo));
                this.setState({
                    userinfo,
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
        return(
            <UserAPI.Provider
                value={{
                    getUserAPI: this.getUserAPI,
                    userDelete: this.userInfoDelete,
                    accountCreate: this.accountCreate,
                    login: this.login,
                    logout: this.logout,
                    ...this.state

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