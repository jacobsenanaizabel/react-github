import React from 'react'

export default props => (
    <div className='home-page row'>
        <div className="banner-home col-md-8">
            <h1 className="title welcome">Ache Seu Desenvolvedor Favorito</h1> 
            <h2 className="subtitle">De maneira muito rapida e facil, apenas digite</h2> 
        
            <div class="col-md-6">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Procure por..."/>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Vai!</button>
                </span>
                </div>
            </div>
        </div>
    </div>
)