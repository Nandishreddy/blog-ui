import React from 'react'
import axios from 'axios'
import UserItem from './UserItem'
import {Link} from 'react-router-dom'


class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            post:{},
            user:{},
            comments:[]
        }

    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log(id)
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            const post = response.data
            this.setState({post},()=>{
                const userId=this.state.post.userId
                axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(response=>{
                        const user=response.data
                        this.setState({user})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                    
                
            })
        })
        .catch(err=>{
            console.log(err)
        })
        
        
        axios.get(`http://jsonplaceholder.typicode.com/comments/`)
        .then(response=>{
            const totalComments = response.data
            const comments=[]
            for(let i=0;i<totalComments.length;i++){
                if(totalComments[i].postId==id){
                    console.log(totalComments[i].postId,id)
                    comments.push(totalComments[i])
                    
                }
            }
            this.setState({comments})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        console.log('renderd',this.state.comments.length)
        return(
            <div>
                <p>Author:</p>
                <UserItem key={this.state.post.userId} id={this.state.post.userId} title={this.state.user.name}/>
                <p>Title:</p>
                <p>{this.state.post.title}</p>
                <p>Post:</p>
                <p>{this.state.post.body}</p>
                <ul>
                    <p>Comments:</p>
                    {this.state.comments.map(comment=> {
                        return <li key={comment.id} value={comment.id}>{comment.body}</li>
                    })}
                    
                </ul>
                <Link to="/posts">back</Link>
            </div>
        )
    }   
}

export default PostShow