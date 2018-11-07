import React, {Component} from 'react'
import axios from 'axios'

// Import Pages
import UserLayout from './UserLayout'



class UserAPI extends Component{
    constructor(props){
        super(props)
        this.state = {
            results: []
        };


        this.handleDelete = this.handleDelete.bind(this)

    }
    getUserAPI(url){
        return axios.get(url).then(response => response.data)
    }
    handleDelete(userInfo_id){
        return axios.delete('/api/userinfo/'+userInfo_id)
            .then(response => {
                this.setState(prevState => {
                    return{results: prevState.results.filter(result => result._id !== userInfo_id)}
                })
            })
    }

    componentDidMount(){
        this.getUserAPI('/api/userinfo')
            .then(results => this.setState({results})
            )
    }
    render(){

        const userinfo = this.state.results;

        return(
            <div>
                <UserLayout userinfo = {userinfo}/>
            </div>
        )
    }
}

export default UserAPI;