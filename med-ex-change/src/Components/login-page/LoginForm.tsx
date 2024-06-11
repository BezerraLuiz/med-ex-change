import './LoginForm.css';
import { Link } from 'react-router-dom';

function LoginForm() {

  return (
    <div className="main-container">
      <div id='container-login'>
        <h1 style={{ color: 'white' }}>LOGIN</h1>
        <form autoComplete="off" action="">
          <label htmlFor="email">E-mail</label>
          <input type="text" placeholder='@mail.com' />
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder='Senha@123' />
        </form>
        <div id='container-check'>
          <input type="checkbox" id="remember" />
          <label id='checkbox' htmlFor="remember">Lembrar senha</label>
          <a href="">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div id='container-register'>
          <label htmlFor="">Não tem conta?</label>
          <a href=""><Link to={`/register`}>Inscreva-se</Link></a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
