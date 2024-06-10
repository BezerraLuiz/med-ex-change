import './LoginForm.css';

function LoginForm() {
  
  const printClick = () => {
    console.log('clicou')
  }

  return (
    <div className="main-container">
      <div id='container-login'>
        <h1 style={{ color: 'white' }}>LOGIN</h1>
        <form action="">
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
        <button onClick={printClick}>Entrar</button>
        <div id='container-register'>
          <label htmlFor="">Não tem conta?</label>
          <a href="">Inscreva-se</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
