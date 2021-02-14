import React, { useState } from 'react';
import { makeRequest } from 'core/components/utils/request';
import './styles.scss';


type FormState = {
   usuario: string;
}
type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;


const Search = () => {

   const [formData, setformData] = useState<FormState>({
      usuario: '',      
  });
  

  const handleOnChange = (event: FormEvent) => {
     const name = event.target.name;
     const value = event.target.value;
      
     setformData(data => ({...data, [name]: value }));
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault();     
      
    if (formData.usuario)
       makeRequest({ url: '/users/'+formData.usuario, method: 'GET'})
    else{
       alert('Nenhum usuário digitado');
       return;
    }    
  }

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
      </div>
   );


}


export default Search;