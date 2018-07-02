import React from 'react'
import axios from 'axios'

export default class Repository extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            repositoryListReturn : [],
            repositoryList : this.props.location.state.repository
        }
    }

    componentDidMount() {
        axios.get(this.state.repositoryList, { crossdomain: true } )
            .then(response => {
                this.setState({repositoryListReturn : response.data});
                console.log(this.state.repositoryListReturn);
            }
        )
    }

    render() {
        return(     
            <div className="repository-container">
                <div className="repository-header">
                    <h3> Repositorios </h3>
                    <label>Ordenado de forma</label>
                    <select>
                        <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                    </select>
                </div>
                <div className="repository-body">
                    <ul>
                    { this.state.repositoryListReturn.map(repository => 
                        <div>
                        <li className="nav-repository">
                            <h3 className="text-name">{repository.name}</h3>
                            <label><p className="description">{repository.description}</p></label>
                            <div className="technique-description">
                                <label className="language">Linguagem : {repository.language} </label>
                                <label className="stars">Estrelas : {repository.stargazers_count} </label>
                            </div>
                        </li>
                        </div>
                    )}
                    </ul>
                </div>
            </div>
        )
    }
}