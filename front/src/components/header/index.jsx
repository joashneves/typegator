import styles from './Header.module.css';
import icon from '../../assets/personaIcon.svg'
import adicionar from '../../assets/botaoadicionar.svg'
import lupa from '../../assets/lupa.svg';
import { Link } from 'react-router-dom';

export default function Header(){
  return (<>
    <div className={styles.cabecario}>
      <Link to='/'>
      <img className={styles.iconeHome} src={lupa} alt='Lupa'/>
      </Link>
      <Link to='/post'>
      <img className={styles.icone} src={adicionar} alt='Adicionar post' />
      </Link>
      <Link to='/login'>
      <img className={styles.icone} src={icon} alt='Imagem do icone' />
      </Link>
    </div>
  </>) 
}