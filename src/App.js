import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Posts from './Posts'
import PostShow from './PostShow'
import UserShow from './UserShow'
import Users from './Users'


function App(props){
    return(
        <BrowserRouter>
            <div>
                <h2>{props.title}</h2>
  
                <Link to="/posts">Posts</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/users">Authors</Link>
               
                <Route path="/posts" component={Posts}></Route>
                <Route path="/users" component={Users}></Route>
                 
                <Route path="/post-show/:id" component={PostShow}/>
                <Route path="/user-show/:id" component={UserShow}/>
               
            </div>
        </BrowserRouter>
    )
}

export default App