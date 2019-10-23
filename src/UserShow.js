import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PostItem from './PostItem'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
       }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            const user = response.data
            this.setState({user})
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get(`http://jsonplaceholder.typicode.com/posts/`)
        .then(response=>{
            const totalPosts = response.data
            const posts=[]
            for(let i=0;i<totalPosts.length;i++){
                if(totalPosts[i].userId==id){
                    console.log(totalPosts[i].userId,id)
                    posts.push(totalPosts[i])
                    
                }
            }
            this.setState({posts})
        })
        .catch(err=>{
            console.log(err)
        })

    }
    render(){
        return(
            <div>
                <p>Name: {this.state.user.name}</p>
                <p>Email: {this.state.user.email}</p>
                <ul>
                    <p>Posts:</p>
                    {this.state.posts.map(post=> {
                        {/*return <li key={post.id} value={post.id}>{post.title}</li>*/}
                        return<PostItem key={post.id} id={post.id} title={post.body}/>
                    })}
                    
                </ul>
                <Link to="/posts">back</Link>
                
            </div>
        )
    }   
}

export default UserShow