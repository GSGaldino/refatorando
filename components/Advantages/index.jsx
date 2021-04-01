import Tilt from 'react-tilt';
import Provider from '../Provider';

import styles from './index.module.css';

export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <Provider>
        <div className={styles.flexSection}>

          <div className={`${styles.flexItem} ${styles.glass}`}>
            <img src="/advantages-1.png" alt="Símbolo cadeado" />
            <p>Seu site <br />totalmente seguro</p>
          </div>
          <div className={`${styles.flexItem} ${styles.glass}`}>
            <img src="/advantages-2.png" alt="Símbolo cadeado" />
            <p>Sites responsivos <br />e dinâmicos</p>
          </div>
          <div className={`${styles.flexItem} ${styles.glass}`}>
            <img src="/advantages-3.png" alt="Símbolo cadeado" />
            <p>Seu site com design moderno e <br />tecnologia de ponta</p>
          </div>
        </div>
      </Provider>
    </div>
  );
};
