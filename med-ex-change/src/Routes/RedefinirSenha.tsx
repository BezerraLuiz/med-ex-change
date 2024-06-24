import styles from './style/RedefinirSenha.module.css'
import logo from '../assets/logo-preta.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function RedefinirSenha() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const verificarSenha = (event: React.FormEvent) => {
    event.preventDefault();
    if (senha === confirmarSenha) {
      setError('');
      setTimeout(() => {
        navigate('/');
      }, 300)
    } else {
      setError('As senhas não correspondem!');
    }
  }

  return (
    <>
      <div><img src={logo} alt="Logo" /></div>
      <div id={styles.square}>
        <h3 id={styles.titulo}>Redefinir Senha</h3>
        <form className={styles.form_senha} onSubmit={verificarSenha}>
          <div className={styles.form_senha}>
            <label className={styles.label_input} htmlFor="nova-senha">Nova Senha</label>
            <input 
              id="nova-senha"
              type="password" 
              placeholder='Senha@123' 
              autoComplete='off' 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className={styles.form_senha}>
            <label className={styles.label_input} htmlFor="confirmar-senha">Confirmar Senha</label>
            <input 
              id="confirmar-senha"
              type="password" 
              autoComplete='off' 
              value={confirmarSenha} 
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>
          <button type="submit" id={styles.btn_confirmar}>Confirmar</button>
          {error && <p style={{ color: 'white', textDecoration: 'underline', marginTop: '30px' }}>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default RedefinirSenha;
