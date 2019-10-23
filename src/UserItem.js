import React from 'react'
import {Link} from 'react-router-dom'

function UserItem(props){
    return(
        <Link to={`/user-show/${props.id}`}>{props.title}</Link>
       
    )
}

export default UserItem