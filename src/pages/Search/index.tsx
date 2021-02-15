import React, { useState } from 'react';
import { makeRequest } from 'core/components/utils/request';
import './styles.scss';
import { PerfilUsuario } from 'core/components/types/PerfilUsuario';
import InfoLaders from './components/Loaders/InfoLoader';
import ImagemLoader from './components/Loaders/ImagemLoader';
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs';

type FormState = {
   usuario: string;
}
type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;


const Search = () => {

   const [formData, setformData] = useState<FormState>({
      usuario: '', 

  });

  const [perfilUsuario, setPerfilUsuario] = useState<PerfilUsuario>();
  const [isLoading, setIsLoading] = useState(false);
  const [isPainelPerfil, setIsPainelPerfil] = useState(false);

  const handleOnChange = (event: FormEvent) => {
     const name = event.target.name;
     const value = event.target.value;
      
     setformData(data => ({...data, [name]: value }));
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
     event.preventDefault();     
     if (formData.usuario){ 
        setIsLoading(true);        
        setIsPainelPerfil(true);  
        makeRequest({ url: '/users/'+formData.usuario, method: 'GET'})
        .then(response => {          
         setPerfilUsuario(response.data); 

         
        
        console.log('Company = ', perfilUsuario?.company)
       }).finally(() => {           
            setIsLoading(false);
          })
        .catch(error => {
           console.log('Error catch :', error.statusText);
           setIsPainelPerfil(false);
           alert('Usuário não encontrado! Tente outro usuário.')
        })  
         
         
     }
      else{
          alert('Nenhum usuário digitado');
          setIsPainelPerfil(false);
          return;
      }    
  }


  //variaveis do perfil do usuário
  var repositorio_publico: string = 'Repositório público: '+ perfilUsuario?.public_repos ;
  var seguidores: string = 'Seguidores: '+perfilUsuario?.followers;
  var seguindo: string = 'Seguindo: '+perfilUsuario?.following; 
  var company: string = 'Comapany : '+perfilUsuario?.company;
  var website: string = 'WebSite/Blog : '+perfilUsuario?.blog;
  var localidade: string = 'Localidade : '+perfilUsuario?.location;
  var desde: string = 'Membro desde: '+dayjs(perfilUsuario?.created_at).format('DD/MM/YYYY');


   return (

      <div >
         <div className="nav-bar">
            <label className="nav-titulo"> Bootcamp DevSuperior</label>
         </div>

         <form onSubmit={handleSubmit}> 
           <div className="painel">
               
              <h1 className="titulo">Encontre um perfil Github</h1>

              <input className="input" 
                     placeholder={"Usuário Github"}
                     value={formData.usuario}
                     name="usuario"
                     type="text" 
                     onChange={handleOnChange}                      
              />              
           
              <button className="btn-search">
                    Encontrar
              </button>     
          </div>
        </form>   


        {!isPainelPerfil ? <> </> : (
          
          <div className="painel-perfil">

          {isLoading ? <>
                         <div className="info-loaders"><InfoLaders /></div> 
                         <div className="img-loaders"><ImagemLoader /></div>
                       </>: (
               <>                 
                  
                     <div >
                       <img src={perfilUsuario?.avatar_url} alt="avatar" className="img"/> 
                       <button className="btn-perfil"> Ver perfil</button>
                     </div>
                                               
                 
                 <div >
                 <input  value={repositorio_publico}  className="input-repositori"/> 
                 <input value={seguidores} className="input-seguidores" />  
                 <input value={seguindo} className="input-seguindo" />
                 </div>
                 <div className="painel-interno">
                 <label className="painel-interno-label">Informações </label>

                 <input className="input-company" value={company} />
                 <input className="input-website" value={website} />
                 <input className="input-localidade" value={localidade} />
                 <input className="input-desde" value={desde} />
                 </div>    

                 
              </>
           )}
          </div>  
        )}
       
      </div>
      
   );


}


export default Search;