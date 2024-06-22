import { useState } from 'react';
import { AsYouType } from "libphonenumber-js"; // Importando a função format da biblioteca libphonenumber-js
import styles from "./style/Registrar.module.css";
import { Link, Outlet } from 'react-router-dom';
// import { Link } from "react-router-dom";

function Registrar() {
  const [cpf, setCpf] = useState("");

  // Função para formatar o CPF conforme o usuário digita
  const formatarCPF = (event: { target: { value: any } }) => {
    let cpf = event.target.value;
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, "");
    // Insere os pontos e traço conforme o usuário digita
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(cpf);
  };

  const [telefone, setTelefone] = useState("");

  // Função para formatar o número de telefone conforme o usuário digita
  const formatarTelefone = (event: { target: { value: any } }) => {
    let numeroTelefone = event.target.value;
    // Remove todos os caracteres não numéricos
    numeroTelefone = numeroTelefone.replace(/\D/g, "");

    try {
      // Formata o número de telefone no formato nacional brasileiro
      const ddd = new AsYouType("BR");
      const telefoneFormatado = ddd.input(numeroTelefone);
      setTelefone(telefoneFormatado); // Atualiza o estado com o número formatado
    } catch (error) {
      console.error("Erro ao formatar o número de telefone:", error);
      setTelefone(numeroTelefone); // Mantém o número sem formatação em caso de erro
    }
  };

  return (
    <>
      <Outlet/>
      <div id={styles.background}>
        <div id={styles.titulo}>
          <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "white" }}>REGISTRAR</h1>
        </div>
        <div className={styles.container}>
          <div>
            <form className={styles.form_register} id={styles.form_first} autoComplete="off" action="">
              <label htmlFor="email">Nome Completo</label>
              <input type="text" />
              <label htmlFor="password">E-mail</label>
              <input type="email" placeholder="@mail.com" />
            </form>
          </div>
          <div>
            <form className={styles.form_register} id={styles.form_second} autoComplete="off" action="">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                placeholder="___.___.___-__"
                value={cpf}
                maxLength={14} // Limita a quantidade de caracteres
                onChange={formatarCPF}
              />
              <label htmlFor="phoneNumber">Número de Telefone</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="(00) 00000-0000"
                value={telefone}
                maxLength={15} // Limita a quantidade de caracteres
                onChange={formatarTelefone}
              />
            </form>
          </div>
        </div>
        <div className={styles.container}>
          <form className={styles.form_register} id={styles.form_third} autoComplete="off" action="">
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Senha@123" />
          </form>
          <form className={styles.form_register} autoComplete="off" action="">
            <label htmlFor="password" id="password">Confirmar Senha </label>
            <input type="password"/>
          </form>
        </div>
        <div className={styles.container} id={styles.container_check}>
          <form id={styles.form_container} action="">
            <input type="checkbox" id='check' />
            <label htmlFor="check"><Link style={{ color: 'white', fontSize: '14px' }} to={`termos`}>Eu concordo com os Termos de Uso e a Política de Privacidade.</Link></label>
          </form>
        </div>
        <div className={styles.container} style={{ marginTop: '15px' }}>
        <Link style={{ color: 'white', textDecoration: 'none'}} to={`/`}><button className={styles.btn_registrar_voltar}>Criar Conta</button></Link>
        <Link style={{ color: 'white', textDecoration: 'none'}} to={`/`}><button className={styles.btn_registrar_voltar}>Cancelar</button></Link>
        </div>
      </div>
    </>
  );
}

export default Registrar;
