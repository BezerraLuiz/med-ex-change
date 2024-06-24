import styles from './style/ImgLogin.module.css';
import '../../assets/image-login.png'

function ImgLogin() {
  
  return (
    <>
      <div id={styles.left_background}></div>
      <div id={styles.square}></div>
      <img id={styles.img_login} src="src\assets\image-login.png" alt="" />
    </>
  );
}

export default ImgLogin;
