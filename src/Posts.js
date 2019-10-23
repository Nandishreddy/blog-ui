import React from 'react'
import axios from 'axios' 
import PostItem from './PostItem'
import './master.css'

class Posts extends React.Component{
    constructor(){
        console.log('constructor')
        super()
        this.state={
            posts:[],
            currentPage:1,
            postsPerPage:10
        }
    }
    pageClick=(e)=>{
        const currentPage=e.target.id
        this.setState({currentPage})
    }
    

    componentDidMount(){
        console.log('component did mount')
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log('axios success function')
                // console.log(response.data)
                const posts = response.data
                this.setState({ posts })
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render(){
        const indexOfLastPost = this.state.currentPage*this.state.postsPerPage
        const indexOfFirstPost = indexOfLastPost-this.state.postsPerPage
        const currentPosts=this.state.posts.slice(indexOfFirstPost,indexOfLastPost)
        
        const renderPosts=currentPosts.map((post)=>{
            return<PostItem key={post.id} id={post.id} title={post.body}/>
        })

        const pageNumbers=[];
        for(let i=1;i<=Math.ceil(this.state.posts.length/this.state.postsPerPage);i++){
            pageNumbers.push(i)
        }

        const renderPageNumbers=pageNumbers.map(pageNumber=>{
            return(
                <li key={pageNumber} id={pageNumber} onClick={this.pageClick}>{pageNumber}</li>
            )
        })

        return(
            <div>
                <h2>Listing Posts {indexOfFirstPost+1}-{indexOfLastPost}</h2>
                <ul>
                    {renderPosts}
                </ul>
                <h3>Pages</h3>
                <ul id="menu">
                    {renderPageNumbers}
                </ul>
            </div>
        )
    }
}

export default Posts