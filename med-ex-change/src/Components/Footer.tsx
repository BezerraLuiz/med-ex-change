import styles from './style/Footer.module.css'

function Footer() {

  return (
    <>
      <footer id={styles.footer_principal}>
        <p className={styles.footer_text}>Coded by Luiz Antônio Ponciano Costa Bezerra</p>
        <p className={styles.footer_text}>MedExChange | Conectando Saúde</p>
      </footer>
    </>
  )
}

export default Footer