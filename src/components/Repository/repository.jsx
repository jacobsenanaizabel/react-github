import React from 'react'
import axios from 'axios'

import './repository.scss'

export default class Repository extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            repositoryListReturn : [],
            repositoryList : this.props.location.state.repository,
            order:''
        }
    }

          
    handleChange(value){
        this.setState({
            order: value
        });

        console.log(this.state.repositoryListReturn);
    }

    sortDecrescent(){

    }

    sortCrescent(){

    }

    componentDidMount() {
        axios.get(this.state.repositoryList, { crossdomain: true } )
            .then(response => {
                this.setState({repositoryListReturn : response.data});
            }
        )
    }

    render() {
        return(     
            <div className="repository-container">
                <div className="repository-header">
                    <h3 className="title-repository"> Repositorios </h3>
                    <div className="container-order">
                        <label className="title-order">Ordenado de forma </label>
                        <select className="select-order" value={this.state.order} onChange={e => this.handleChange(e.target.value)}>
                            <option value="cresc">Crescente</option>
                            <option value="decresc">Decrescente</option>
                        </select>
                    </div>
                </div>
                <div className="repository-body">
                    <ul>
                    { this.state.repositoryListReturn.map(repository => 
                        <li className="nav-repository">
                            <a href={repository.html_url} className="text-name"> {repository.name} </a>
                            <h3 ></h3>
                            <label><p className="description">{repository.description}</p></label>
                            <div className="technique-description">
                                <label className="language">Linguagem : {repository.language} </label>
                                <label className="stars">Estrelas : {repository.stargazers_count} </label>
                            </div>
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        )
    }
}