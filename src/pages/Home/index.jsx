import Cabecalho from '../../components/Cabecalho'
import Menu from '../../components/Menu'
import styles from './Home.module.scss'
import Banner from '../../components/Banner'

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
      </main>
    </>
  )
}
