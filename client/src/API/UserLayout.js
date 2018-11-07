import {Link,Route,Switch} from 'react-router-dom'
import React from 'react'

// Page Import
import SwiperPage from './UserDetailPage'


function UserChoice(userInfo, handleLike,handleDislike) {

    const src = '/api/userinfo/img/';
    const like = 'like';
    const dislike = 'dislike'

    const userElement = userInfo.map((userInfo) =>(
        <div className={'likeprofile'}>
            <Link className={'likelink'} to={`/userinfo/${userInfo._id}`}>
                <div className={'linkimg'}><img alt='filename' src={`${src}${userInfo.filename}`} width={400}/></div>
                <div className={'likename'}>{userInfo.name}</div>
            </Link>
            <button onClick={() =>handleDislike(userInfo._id)}>{dislike}</button>
            <button onClick={() =>handleLike(userInfo._id)}>{icon}</button>
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
                    path='/userInfo/:id'
                    render={({match: {params: {id}}}) =>(
                        <SwiperPage {...userInfo.find(user => id === user._id)}/>
                    )}/>
            </Switch>
        </div>
    )
}

export default UserChoice;