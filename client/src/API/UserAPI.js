// ***I think you need to import createContext***
import React, {Component, createContext} from "react";
import axios from "axios";



const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const UserAPI = createContext();

// const UserAPI = React.createContext();

// Import Pages

class UserAPIProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      userinfo: JSON.parse(localStorage.getItem("userinfo")) || {},
      token: localStorage.getItem("token") || ""
    };
  }
  componentDidMount() {
    this.getUserAPI();
  }

  //changed "DEVELOPER" to "USER" for readability
  getUserAPI = () => {
    return userAxios.get("/api/userinfo").then(response => {
      this.setState({
        results: response.data.map((user, i) => {
          if (i === 0) user.selected = true;
          user.selected = false;
          return user;
        })
      });
      return response;
      
    });
  };

  userInfoDelete(userInfo_id) {
    return userAxios.delete("/api/userinfo/" + userInfo_id).then(response => {
      this.setState(prevState => {
        return {
          results: prevState.results.filter(
            result => result._id !== userInfo_id
          )
        };
      });
    });
  }

  accountCreate = userInfo => {
    return axios.post("/auth/AccountCreate", userInfo).then(response => {
      const { userinfo, token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userinfo", JSON.stringify(userinfo));
      this.setState({
        userinfo,
        token
      });
      return response;
    });
  };

  login = credentials => {
    return axios.post("/auth/Login", credentials).then(response => {
      const { token, email } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("email", JSON.stringify(email));
      this.setState({
        email,
        token
      });
      this.getUserAPI();
      return response;
    });
  };

  logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    this.setState({
      results: [],
      email: {},
      token: ""
    });
  };


  render() {
    return (
     
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
   
    );
  }
}





export const withContext = Component => {
  return props => {
    return (
      <UserAPI.Consumer>
        {globalState => {
          return <Component {...globalState} {...props} />;
        }}
      </UserAPI.Consumer>
    );
  };
};



export default withContext(UserAPIProvider);


// nick rewrote consumer
// export const withContext = C => props => 
// <UserAPI.Consumer>
//   {globalState => <C{...globalState}{...props} />}
// </UserAPI.Consumer>





