import styles from './styles.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;