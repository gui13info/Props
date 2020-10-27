import React from 'react';

import Titulo from '../Titulo';
import ItemLista from '../ItemLista';


import aquario from '../../assets/aquario.jpg';
import aries from '../../assets/aries.jpg';
import cancer from '../../assets/cancer.jpg';
import capricornio from '../../assets/capricornio.jpg';
import escorpiao from '../../assets/escorpiao.jpg';
import gemeos from '../../assets/gemeos.jpg';
import leao from '../../assets/leao.jpg';
import libra from '../../assets/libra.jpg';
import peixes from '../../assets/peixes.jpg';
import sagitario from '../../assets/sagitario.jpg';
import touro from '../../assets/touro.jpg';
import virgem from '../../assets/virgem.jpg';

import './styles.css';

export default function ListaDeSignos(){
    return(
        <div>
            <Titulo />

            <div className="lista">
                <ItemLista 
                    signo = "Aquário" dataInicio = "21/01"
                    dataFim = "19/02" imagem = {aquario}
                />

                <ItemLista 
                    signo="Peixes" dataInicio = "20/02"
                    dataFim = "20/03" imagem={peixes}
                />

                <ItemLista
                    signo="Áries" dataInicio="21/03"
                    dataFim="20/04" imagem={aries} 
                />

                <ItemLista
                    signo="Touro" dataInicio="21/04"
                    dataFim="21/05" imagem={touro} 
                />

                <ItemLista
                    signo="Gêmeos" dataInicio=" 22/05"
                    dataFim="21/06" imagem={gemeos} 
                />

                <ItemLista
                    signo="Câncer" dataInicio="21/06"
                    dataFim="23/07" imagem={cancer} 
                />

                <ItemLista
                    signo="Leão" dataInicio="24/07"
                    dataFim="23/08" imagem={leao} 
                />

                <ItemLista
                    signo="Virgem" dataInicio="24/08"
                    dataFim="23/09" imagem={virgem} 
                />

                <ItemLista
                    signo="Libra" dataInicio="24/09"
                    dataFim="23/10" imagem={libra} 
                />

                <ItemLista
                    signo="Escorpião" dataInicio="24/10"
                    dataFim="22/11" imagem={escorpiao} 
                />

                <ItemLista
                    signo="Sagitário" dataInicio="23/11"
                    dataFim="21/12" imagem={sagitario} 
                />

                <ItemLista
                    signo="Capricórnio" dataInicio="22/12"
                    dataFim="20/01" imagem={capricornio} 
                />

            </div>
        </div>
    );
}