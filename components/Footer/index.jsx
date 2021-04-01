import Provider from '../Provider';

import styles from './index.module.css';

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <Provider>
        <div className={styles.flexSection}>
          <div className={styles.flexItem}>
            <img src="/logo.svg" alt="Refatorando" />
          </div>
          <div className={styles.flexItem}>
            <ul>
              <li>(11) 94234-6658 | (11) 98634-5917</li>
              <li>@refatorand0</li>
              <li>refatorand0@outlook.com</li>
            </ul>
          </div>
        </div>
      </Provider>
    </footer>
  );
};
