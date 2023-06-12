import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <ul className={styles.rodape__icones}>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/AluraCursosOnline/"
          >
            <img src={facebook} alt="ícone do Facebook" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/aluraonline?lang=en"
          >
            <img src={twitter} alt="ícone do Twitter" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/aluraonline/?hl=en"
          >
            <img src={instagram} alt="ícone do Instragram" />
          </a>
        </li>
      </ul>
      <p>Desenvolvido por Alura</p>
    </footer>
  )
}
