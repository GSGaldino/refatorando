import Provider from '../Provider';

import { IconContext } from 'react-icons';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

import styles from './index.module.css';

export default function Footer() {
  const footerIconStyle = {
    color: '#4DCBD3',
    size: '20px'
  };

  return (
    <footer className={styles.footer}>
      <Provider>
        <div className={styles.flexSection}>
          <div className={styles.flexItem}>
            <img src="/logo.svg" alt="Refatorando" />
          </div>
          <div className={styles.flexItem}>
            <ul>
              <li>
                <IconContext.Provider value={footerIconStyle}>
                  <FaWhatsapp />
                </IconContext.Provider>
                <p>(11) 94234-6658 | (11) 98634-5917</p>
              </li>
              <li>
                <IconContext.Provider value={footerIconStyle}>
                  <FaInstagram />
                </IconContext.Provider>
                <p>@refatorand0</p>
              </li>
              <li>
                <IconContext.Provider value={footerIconStyle}>
                  <FaEnvelope />
                </IconContext.Provider>
                <p>refatorand0@outlook.com</p>
              </li>
            </ul>
          </div>
        </div>
      </Provider>
    </footer>
  );
};
