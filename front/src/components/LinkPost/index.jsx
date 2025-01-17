import setaCima from '../../assets/setaparacima.svg';
import setaBaixo from '../../assets/setaparabaixo.svg';
import styles from './LinkPost.module.css';

export default function LinkPost({ titulo, link, descricao }) {
  return (
    <>
    <div className={styles.componenteLink}>
    <div className={styles.componenteSetas}>
      <img src={setaCima} alt='seta para cima'/>
      <img src={setaBaixo} alt='seta para baixo'/>
    </div>
    <di className={styles.componenteDescricao}>
      <h1 className={styles.linhaTitulo}>{titulo}</h1>
      <p className={styles.linhaDoLink}>{link}</p>
      <div>{descricao}</div>
    </di>
    </div>
    </>
  );
}
