import styles from './style/EsqueceuSenha.module.css';
import logo from '../assets/logo-preta.png'
import img1 from '../assets/esqueceu-senha1.png'
import img2 from '../assets/esqueceu-senha2.png'
import { Link } from 'react-router-dom';

function EsqueceuSenha() {

  return (
      <>
        <div><img src={logo} alt="" /></div>
        <div>
          <img id={styles.img1} src={img1} alt="" />
          <img id={styles.img2} src={img2} alt="" />
        </div>
        <div id={styles.square}>
          <h3 className={styles.titulo}>Esqueceu sua senha?</h3>
          <h5 className={styles.titulo} style={{ fontSize: '27px', marginBottom: '30px' }}>Código de Verificação.</h5>
          <form className={styles.form_senha} action="">
            <input id={styles.input_codigo} type="text" placeholder='XXXXXX' autoComplete='off'/>
          </form>
          <p className={styles.text_termos} >Enviamos um código ao seu e-mail para a confirmação do usuário. Por favor, digite o código no campo abaixo para prosseguir e trocar sua senha.</p>
          <p className={styles.text_termos}>Para a segurança de sua conta, recomendamos a utilização de senhas que contenham pelo menos oito (8) caracteres, incluindo letras maiúsculas, letras minúsculas e números. Isso ajudará a criar uma senha mais segura e protegida.</p>
          <div id={styles.container_btn}>
            <Link to={`/redefinir-senha`}><button id={styles.btn_confirmar}>Confirmar</button></Link>
          </div>
        </div>
      </>
  );
}

export default EsqueceuSenha;
