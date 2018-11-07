import React, {Component,createRef}from "react";
import axios from 'axios'


import ProgrammingPick from "./programmingPick";
import LanguagePick from "./languagePick";

import "./style/profile.css"

const axiosCustom = axios.create({
    transformRequest: [data =>{
        const formData = new FormData()
        for(let key in data){
            if(data.hasOwnProperty(key))
                formData.append(key, data[key])
        }
        return formData
    }]
});


class Profile extends Component {
    constructor(props) {
        super(props);
        this.uploader = createRef();
        this.state = {
            programmingLanguage: [],
            spokenLanguage: [],
            bio: '',
        };
        this.manageFileResponse = this.manageFileResponse.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.programmingHandleChange = this.programmingHandleChange.bind(this);
        this.spokenHandleChange = this.spokenHandleChange.bind(this);
    }

    handleChange({target: {name, value}}) {
        this.setState({[name]: value})
    }
    sendImage(file,inputs){
        return axiosCustom.post('/api/userinfos', {file, ...inputs})
            .then(response => response.data)
    }
    handleUpload(uploader, inputs){
        return e => {
            e.preventDefault();
            this.sendImage(uploader.current.files[0], inputs)
                .then(this.manageFileResponse)
        }
    }
    manageFileResponse(newUserInfo){
        this.setState(prevState => ({
            results: [...prevState.results, newUserInfo]
        }))
    }
    programmingHandleChange({target}) {
        const selectedProgramming = target.selectedOptions;
        const programmingLanguages = Array.from(selectedProgramming).map((programmingLanguage) => {
            return programmingLanguage.value
        });
        this.setState({[target.name]: programmingLanguages})
    }
    spokenHandleChange({target}) {
        const selectedSpokens = target.selectedOptions;
        const spokenLanguages = Array.from(selectedSpokens).map((spokenLanguage) =>{
            return spokenLanguage.value
        });
        this.setState({[target.name]: spokenLanguages})
    }
    render() {
        return (

            <div>

                <form onSubmit={this.handleUpload(this.uploader,this.state)}>
                    <ProgrammingPick
                        handleChange = {this.programmingHandleChange}/>
                    <LanguagePick
                        handleChange = {this.spokenHandleChange}/>
                    <label htmlFor={"avatar"}>Profile Picture: </label>
                    <input
                        ref={this.uploader}
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/png,image/jpeg"
                    />
                    <textarea onChange={this.handleChange} value={this.bio} name="bio" rows="40" cols="80"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Profile;
