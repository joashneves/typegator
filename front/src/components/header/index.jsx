import styles from './Header.module.css';
import icon from '../../assets/personaIcon.svg'
import adicionar from '../../assets/botaoadicionar.svg'
import { Link } from 'react-router-dom';

export default function Header(){
  return (<>
    <div className={styles.cabecario}>
      <Link to='/cadastro'>
      <img className={styles.icone} src={icon} alt='Imagem do icone' />
      </Link>
      <img className={styles.icone} src={adicionar} alt='Adicionar post' />
    </div>
  </>) 
}