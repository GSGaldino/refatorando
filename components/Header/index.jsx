import Provider from '../Provider';

import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Provider>
        <div className={styles.header}>

          {/* SEO */}
          <h1 style={{visibility: "hidden", display: "none"}}>Refatorando</h1>

          <img src="/logo.svg" alt="Refatorando" />

        </div>
      </Provider>
    </header>
  );
};
