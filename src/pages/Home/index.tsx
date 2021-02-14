import React from 'react';
import './styles.scss';

import { Link } from 'react-router-dom';



const Home = () => (

    <div className="home-container">
      <div className="nav-bar">
          <label className="nav-titulo"> Bootcamp DevSuperior</label>
      </div>    
     
       <div >
           <h1 className="sub-titulo">
           Desafio do Capítulo 3, Bootcamp DevSuperior              
           </h1>

           <div className="text-sub-titulo">
              <p>
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/><br/>

                Favor observar as instruções passadas 
                no capítulo sobre a<br/>  elaboração deste projeto.<br/><br/>

                Este design foi adaptado a partir de Ant Design System for Figma,
                de Mateusz Wierzbicki: <a className="email">antforfigma@gmail.com</a>
              </p>                                   
           </div>           
           
           <Link to="/search" >
             <button className="btn-home" >
                  Começar      
             </button>  
            </Link>
         </div>      
    </div>
);

export default Home;