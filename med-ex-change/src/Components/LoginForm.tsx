import './LoginForm.css'

function LoginForm() {
  
  return (
    <>
      <div>
        <h1 style={{color: 'white'}}>LOGIN</h1>
        <form action="">
          <label htmlFor="email">E-mail</label>
          <input type="text" placeholder='@mail.com'/>
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder='Senha@123'/>
        </form>
        <div id='container-check'>
          <input type="checkbox" />
          <label id='checkbox' htmlFor="checkbox">Lembrar senha</label>
        </div>
      </div>
    </>
  )
}

export default LoginForm