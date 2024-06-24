import { useLocation } from 'react-router-dom';
import styles from './style/Footer.module.css'
import { useEffect, useState } from 'react';

function Footer() {

  const [color, setColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const location = useLocation(); // Obtenha o objeto de localização do React Router

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = window.location.href; // Obtém a URL atual do navegador

      console.log(baseUrl);

      // Utilize location.pathname para verificar a rota atual
      if (location.pathname === '/esqueceu-a-senha' || location.pathname === '/redefinir-senha') {
        console.log('URL verificada!');
        setColor('white');
        setBackgroundColor('#1D5C99');
      } else {
        console.log('URL não verificada!');
        setColor('#1D5C99');
        setBackgroundColor('white');
      }
    };

    fetchData();
  }, [location.pathname]); // Adicione location.pathname como dependência

  return (
    <>
      <footer id={styles.footer_principal} style={{ color: color, backgroundColor: backgroundColor}}>
        <p className={styles.footer_text}>Coded by Luiz Antônio Ponciano Costa Bezerra</p>
        <p className={styles.footer_text}>MedExChange | Conectando Saúde</p>
      </footer>
    </>
  )
}

export default Footer