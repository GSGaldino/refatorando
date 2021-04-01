import styles from './index.module.css';

export default function ParallaxSection({ children }){
  return (
    <div className={styles.parallaxSection}>
      { children }
    </div>
  );
};
