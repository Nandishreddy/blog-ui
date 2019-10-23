import React from 'react'
import axios from 'axios' 
import AuthorItem from './AuthorItem'


class Users extends React.Component{
    constructor(){
        console.log('constructor')
        super()
        this.state={
            users:[],
        }
    }

    componentDidMount(){
        console.log('component did mount')
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log('axios success function')
                // console.log(response.data)
                const users = response.data
                this.setState({ users })
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render(){

        return(
            <div>
                <h2>Listing Authors {this.state.users.length}</h2>
                <ul>
                    {this.state.users.map(user=> {
                        return <AuthorItem key={user.id} id={user.id} title={user.name}/>
                    })}
                </ul>
        
            </div>
        )
    }
}

export default Users