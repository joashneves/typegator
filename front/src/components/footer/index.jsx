import { Link } from "react-router-dom";
import styles from './footer.module.css'
export default function Footer(){
  return(
    <>
    <div className={styles.rodape}>
      <Link to="/sobre">
      <p>Sobre</p>
      </Link>
      <Link to='https://github.com/joashneves/typegator'>
      <p>Git Hub</p></Link>
      <Link to='https://buymeacoffee.com/joashneves'>
      <p>Buy me a coffe</p></Link>
    </div>
    </>
  )
}