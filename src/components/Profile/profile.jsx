import React from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

import './profile.scss'

export default class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            urlUser : this.props.location.state.profile,
            userInfo : []
        }
    }

    componentDidMount() {
        axios.get(this.state.urlUser, { crossdomain: true } )
            .then(response => {
                this.setState({userInfo : [response.data]});
            }
        ).catch(function (error) {
            console.error('erro no request :',error);
        });
    }

    render() {
        return(     
            <div className="user-container">
             {
                this.state.userInfo.map(user => 
                <div className="container-user">
                    <img src={user.avatar_url} class="user-avatar" alt="Cinque Terre" width="304" height="236"/>
                    <label><h2 className="user-name">{user.name}</h2></label>
                    <label><p className="user-location">{user.location}</p> </label>
                    <label><p className="user-email">{user.email}</p></label>
                    <textarea readonly class="form-control" rows="5" id="comment">
                        {user.bio}
                    </textarea>
                    <button type="button" class="btn btn-primary repository-button">
                    <Link className="text-white" to={{pathname: '/repository',
                                                state: { repository: user.repos_url } }}> Repositórios </Link>
                    </button>
                    <ul>                    
                        <li class="user-follow">Seguidores {user.followers}</li>
                        <li class="user-follow">Seguindo {user.following} </li>
                    </ul>
                </div>                         
             )}       
  
            </div>
        )
    }
}