import { useState, ChangeEvent } from 'react';
import { AsYouType } from "libphonenumber-js"; // Importando a função format da biblioteca libphonenumber-js
import styles from "./style/Registrar.module.css";
// import { Link } from "react-router-dom";

function Registrar() {
  const [cpf, setCpf] = useState("");

  // Função para formatar o CPF conforme o usuário digita
  const handleCpfChange = (event: { target: { value: any } }) => {
    let cpfValue = event.target.value;
    // Remove todos os caracteres não numéricos
    cpfValue = cpfValue.replace(/\D/g, "");
    // Insere os pontos e traço conforme o usuário digita
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2");
    cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2");
    cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(cpfValue);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  // Função para formatar o número de telefone conforme o usuário digita
  const handlePhoneNumberChange = (event: { target: { value: any } }) => {
    let phoneNumberValue = event.target.value;
    // Remove todos os caracteres não numéricos
    phoneNumberValue = phoneNumberValue.replace(/\D/g, "");

    try {
      // Formata o número de telefone no formato nacional brasileiro
      const formatter = new AsYouType("BR");
      const formattedPhoneNumber = formatter.input(phoneNumberValue);
      setPhoneNumber(formattedPhoneNumber); // Atualiza o estado com o número formatado
    } catch (error) {
      console.error("Erro ao formatar o número de telefone:", error);
      setPhoneNumber(phoneNumberValue); // Mantém o número sem formatação em caso de erro
    }
  };

  const [displayRed, setDisplayRed] = useState<boolean>(false);
  const [displayOrg, setDisplayOrg] = useState<boolean>(false);
  const [displayYlw, setDisplayYlw] = useState<boolean>(false);
  const [displayBlue, setDisplayBlue] = useState<boolean>(false);
  const [displayGreen, setDisplayGreen] = useState<boolean>(false);

  const checkPassword = (event: ChangeEvent<HTMLInputElement>) => {
      const passwordValue: string = event.target.value;

        // Verifica tamanho da senha
        if (passwordValue.length <= 3 && passwordValue.length >= 1) {
            setDisplayRed(true);
        } else {
            setDisplayRed(false);
        }

        // Verifica se a senha contém letras minúsculas
        if (/[a-z]/.test(passwordValue) && passwordValue.length > 3) {
            setDisplayRed(true);
            setDisplayOrg(true);
        } else {
            setDisplayOrg(false);
        }

        // Verifica se a senha contém letras maiúsculas
        if (/[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue) && passwordValue.length > 3) {
            setDisplayRed(true);
            setDisplayOrg(true);
            setDisplayYlw(true);
        } else {
            setDisplayYlw(false);
        }

        // Verifica se a senha contém letras maiúsculas
        if (/[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue) && /[0-9]/.test(passwordValue) && passwordValue.length > 5) {
            setDisplayRed(true);
            setDisplayOrg(true);
            setDisplayBlue(true);
        } else {
            setDisplayBlue(false);
        }

        // Verifica se a senha contém letras maiúsculas
        if (/[^A-Za-z0-9]/.test(passwordValue) && /[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue) && /[0-9]/.test(passwordValue) && passwordValue.length >= 8) {
          setDisplayRed(true);
          setDisplayOrg(true);
          setDisplayBlue(true);
          setDisplayGreen(true);
        } else {
          setDisplayGreen(false);
        }
  }

  return (
    <>
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
                onChange={handleCpfChange}
              />
              <label htmlFor="phoneNumber">Número de Telefone</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="(00) 00000-0000"
                value={phoneNumber}
                maxLength={15} // Limita a quantidade de caracteres
                onChange={handlePhoneNumberChange}
              />
            </form>
          </div>
        </div>
        <div className={styles.container}>
          <form className={styles.form_register} id={styles.form_third} autoComplete="off" action="">
            <label htmlFor="password">Senha</label>
            <input type="password" onChange={checkPassword} placeholder="Senha@123" />
          </form>
          <form className={styles.form_register} autoComplete="off" action="">
            <label htmlFor="password" id="password">Confirmar Senha </label>
            <input type="password"/>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registrar;
