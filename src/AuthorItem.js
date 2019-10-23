import React from 'react'
import {Link} from 'react-router-dom'

function AuthorItem(props){
    return(
        <li key={props.id}>
            <Link to={`/user-show/${props.id}`}>{props.title}</Link>
        </li>
    )
}

export default AuthorItem