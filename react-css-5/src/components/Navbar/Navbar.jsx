import styles from "./Nav.module.css";


const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h3 className={styles.logo}>Lorem ipsum dolor sit.</h3>
      <button className={styles.btn}>Login</button>
    </div>
  );
};

export default Navbar;
