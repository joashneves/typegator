import styles from './Header.module.css';
import icon from '../../assets/personaIcon.svg'
import adicionar from '../../assets/botaoadicionar.svg'

export default function Header(){
  return (<>
    <div className={styles.cabecario}>
      <img className={styles.icone} src={icon} alt='Imagem do icone' />
      <img className={styles.icone} src={adicionar} alt='Adicionar post' />
    </div>
  </>) 
}