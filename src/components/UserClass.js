import React, { Component } from 'react'

export class UserClass extends Component {
    
    constructor(props){
        super(props)
        this.state={
            userInfo:"",
            location:"",
            avatar_url:""
        }
    }

    async componentDidMount(){
        // const data = await  fetch("https://api.github.com/users/harsh17087")
        // const json =await data.json()

        // this.setState({
        //     userInfo:json
        // })
    }
    
    render() {
        
        const {name,location,avatar_url} = this.state.userInfo
        
        return (
            <div className='w-[400px] bg-slate-200 shadow-lg m-auto space-y-2'>
                <img className='w-[200px] h-[200px] border border-black rounded-full m-auto' src={avatar_url}></img>
                <p className='text-2xl font-bold'>{name}</p>
                <p className='font-bold'>📍{location}</p>
            </div>
        )
    }
}

export default UserClass
