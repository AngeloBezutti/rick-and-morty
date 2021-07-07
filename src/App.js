import { useLayoutEffect, useState } from 'react';
import './App.css';
const axios = require('axios');



function App() {
  const [personagem, setPersonagem] = useState([])


  const getPersonagem = () =>{
    axios.get('https://rickandmortyapi.com/api/character')
        .then(retorno => {
          console.log(retorno.data.results)
          setPersonagem(retorno.data.results)
        })
  }

  useLayoutEffect(() =>{
    
    getPersonagem();


  }, [])

  return (
    <div className="App">
      <h1>Rick And Morty</h1>

      <div className="App-header">
       {personagem.map((item, chave) =>
        <div key={chave} className="Perss">
          <img src={item.image} /> <p> {item.name} / {item.species} / {item.status}</p> 
        </div>
       )}
      </div>
    </div>
  );
}

export default App;
