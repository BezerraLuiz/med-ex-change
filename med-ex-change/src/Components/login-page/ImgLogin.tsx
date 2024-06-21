import styles from './style/ImgLogin.module.css';
import '../../assets/image-login.png'
import '../../assets/logo.png'

function ImgLogin() {
  
  return (
    <>
      <div id={styles.left_background}></div>
      <img id={styles.logo} src="src\assets\logo.png" alt="" />
      <div id={styles.square}></div>
      <img id={styles.img_login} src="src\assets\image-login.png" alt="" />
    </>
  );
}

export default ImgLogin;
