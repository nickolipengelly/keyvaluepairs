import {Link,Route,Switch} from 'react-router-dom'
import React from 'react'

// Page Import
import SwiperPage from './UserDetailPage'


function UserLayout({userinfo}) {

    const src = '/api/userinfo/img/';


    const userElement = userinfo.map((userInfo) =>(
        <div className={'likeprofile'}>
            <Link className={'likelink'} to={`/userinfo/${userinfo._id}`}>
                <div className={'linkimg'}><img alt='filename' src={`${src}${userinfo.filename}`} width={400}/></div>
                <div className={'likename'}>{userinfo.fName}</div>
            </Link>
        </div>
    ))
    return(
        <div>
            <Switch>
                <Route exact path={'/userInfo'} render={() =>(
                    <nav>
                        {userElement}
                    </nav>
                )}/>
                <Route
                    path='/userinfo/:id'
                    render={({match: {params: {id}}}) =>(
                        <SwiperPage {...userinfo.find(user => id === user._id)}/>
                    )}/>
            </Switch>
        </div>
    )
}

export default UserLayout;