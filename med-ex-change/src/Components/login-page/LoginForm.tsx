import styles from './style/LoginForm.module.css';
import { Link } from 'react-router-dom';

function LoginForm() {

  return (
    <>
      <div id={styles.background}>
        <div id={styles.main_container}>
          <div id={styles.container_login}>
            <h1 style={{ color: 'white' }}>LOGIN</h1>
            <form id={styles.form_login} autoComplete="off" action="">
              <label htmlFor="email">E-mail</label>
              <input type="text" placeholder='@mail.com' />
              <label htmlFor="password">Senha</label>
              <input type="password" placeholder='Senha@123' />
            </form>
            <div id={styles.container_check}>
              <input type="checkbox" id="check"/>
              <label htmlFor="check">Lembrar senha</label>
              <a className={styles.ref_rotas} href=""><Link className={styles.sublinhado} style={{ color: 'white' }} to={`/`}>Esqueceu a senha?</Link></a>
            </div>
            <button id={styles.btn_entrar} >Entrar</button>
            <div id={styles.container_register}>
              <label htmlFor="">Não tem conta?</label>
              <a className={styles.ref_rotas} href=""><Link style={{ color: 'white' }} to={`/registrar`}>Inscreva-se</Link></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
