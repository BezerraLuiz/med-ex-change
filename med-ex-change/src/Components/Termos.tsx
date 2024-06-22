import { Link } from 'react-router-dom';
import styles from './style/Termos.module.css';

function Termos() {
  return (
    <>
      <div id={styles.square}>
        <div id={styles.container_text}>
          <div id={styles.container_cabecalho}>
            <h3 id={styles.titulo} style={{ fontWeight: '900' }} >Termos de Uso e a Política de Privacidade.</h3>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/registrar`}><button id={styles.fechar}>X</button></Link>
          </div>
          <div>
            <p className={styles.text_termos}>A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza o MedExChange.</p>
            <p className={styles.text_termos} style={{ fontWeight: '900' }} >1. Informações Coletadas:</p>
            <li className={styles.text_termos}>Coletamos informações pessoais fornecidas por você e dados de navegação automaticamente.</li>
            <p className={styles.text_termos} style={{ fontWeight: '900' }} >2. Uso das Informações:</p>
            <li className={styles.text_termos}>Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário.</li>
            <p className={styles.text_termos} style={{ fontWeight: '900' }} >3. Segurança das Informações:</p>
            <li className={styles.text_termos}>Implementamos medidas de segurança para proteger suas informações.</li>
            <p className={styles.text_termos} style={{ fontWeight: '900' }} >5. Acesso e Atualização:</p>
            <li className={styles.text_termos}>Você pode acessar e atualizar suas informações pessoais nas configurações da conta.</li>
            <p className={styles.text_termos} style={{ fontWeight: '900' }} >6. Consentimento:</p>
            <li className={styles.text_termos}>Ao usar o site, você consente com a coleta e uso de suas informações conforme descrito.</li>
            <p className={styles.text_termos} style={{ fontWeight: '900' }} >7. Alterações na Política de Privacidade:</p>
            <li className={styles.text_termos}>Podemos modificar esta Política a qualquer momento. Nós avisaremos.</li>
          </div>
          <h3 className={styles.text_termos} style={{ fontWeight: '700'}} >Para dúvidas, entre em contato conosco.</h3>
        </div>
      </div>
      <div id={styles.background}></div>
    </>
  );
}

export default Termos;
