import React from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

import './searchUser.scss'

export default class SearchUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userListReturn : [],
            totalUsers : 0,
            userList : this.props.location.state.user
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/search/users?q=`+ this.state.userList, { crossdomain: true } )
            .then(response => {
                this.setState({totalUsers : response.data.total_count});
                this.setState({userListReturn : response.data.items});
            }
        )
    }

    render() {
        return(     
            <div className="user-list-container">
                <h2 className="title">Resultados achados {this.state.totalUsers}!</h2> 
                { this.state.userListReturn.map(user => 
                    <div className="card text-center">
                        <div className="card-header">
                            {user.login}
                        </div>
                        <div className="card-body">
                            <img  src={user.avatar_url} class="card-avatar"/>
                            <h4 className="card-title">Score do usuario</h4>
                            <p className="card-text">{user.score}</p>
                            <a className="btn btn-primary">
                            <Link to={{pathname: '/user',
                                       state: { profile: user.url } }}> Saiba mais </Link></a>
                        </div>
                        <div className="card-footer text-muted">
                            <label> ID Do Usuario: {user.id}</label>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}