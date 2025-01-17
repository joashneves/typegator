import lupa from '../../assets/lupa.svg'

export default function Pesquisa(){
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