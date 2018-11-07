import React from 'react'

//push to axios


function AccountCreate(){
    return(
        <div>
            <form>
                <label>First Name: </label>
                <input type="text"/>
                <label>Last Name: </label>
                <input type="text"/>
                <label>Email: </label>
                <input type="email"/>
                <label>Password: </label>
                <input type="password"/>
                <label>Confirm Password: </label>
                <input type="password"/>
                <button>Submit</button>               
            </form>
        </div>
    )
}

export default AccountCreate;