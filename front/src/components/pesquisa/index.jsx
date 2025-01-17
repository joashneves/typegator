import { useState } from 'react';
import lupa from '../../assets/lupa.svg'
import { usePesquisarContext } from '../../hooks/usePesquisarContext';

export default function Pesquisa(){

  const [termoPesquisa, setTermoPesquisa] = useState("");
  const { links } = usePesquisarContext(termoPesquisa);

  const handleChange = (event) => {
    setTermoPesquisa(event.target.value); // Atualiza o termo de pesquisa
  };

  return(
    <>
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input 
        type="text" 
        placeholder="Pesquisar..." 
        style={{
          paddingLeft: '30px', // Deixa espaço para o ícone
          height: '35px', 
          borderRadius: '5px',
          border: '1px solid #ccc',
        }} 
        value={termoPesquisa}
        onChange={handleChange} // Atualiza o estado ao digitar
      />
      <img 
        src={lupa} 
        alt="lupa" 
        style={{
          position: 'absolute',
          left: '8px', // Ajuste de acordo com a padding do input
          top: '50%',
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
        }}
      />
    </div>
    </>
  )
}