import React from 'react';
import { Link } from "react-router-dom"

import Footer from './footer'

export default class Home extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
    }
      
    handleChange(value){
        this.setState({
            user: value
        });
    }

    render() {
        return(
            <div className='home-page row'>             
                <div className="banner-home col-md-8">
                    <h1 className="title welcome">Ache Seu Desenvolvedor Favorito</h1> 
                    <h2 className="subtitle">De maneira muito rapida e facil, apenas digite :</h2> 
                
                    <div className="col-md-6">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Procure por..." value={this.state.user} onChange={e => this.handleChange(e.target.value)}/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onSubmit={this.handleSubmit}>
                            <Link to={{pathname: '/search',
                                       state: { user: this.state.user } }}> Vai </Link>
                            </button>
                        </span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}