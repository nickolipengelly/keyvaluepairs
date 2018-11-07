import React from 'react'

function SwiperPage({_id,filename,fName,lName,age,gender,programmingLanguages,overview,experience,position}) {

    const src = '/api/userinfo/img/';

    return <div key={_id} className={'swipepage'}>

        <div className={'swipepageimg'}>
            <img alt='filename' src={`${src}${filename}`} width={200}/>
        </div>

        <div className='swipepagetext'>
            <h1>{fName}{lName}</h1><br/>
            <h3>Current Position: {position}</h3><br/>
            <h3>{overview}</h3><br/>
            <h4>Experience: {experience}</h4><br/>
            <h4>Programming Languages: {programmingLanguages}</h4><br/>
            <h5>Age: {age}</h5><h5>Gender: {gender}</h5>

        </div>
    </div>

}

export default SwiperPage;


