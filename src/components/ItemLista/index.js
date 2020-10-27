import React from 'react';

import './styles.css';

export default function ItemLista(props){
    return(
        <div className="boxSigno">
            <div className="nomeSigno">
                {props.signo}
            </div>

            <img src={props.imagem} alt={props.signo} className="imagemSigno"/>

            <div className="periodoNascimento">
                {props.dataInicio} - {props.dataFim}
            </div>
        </div>
    );
}