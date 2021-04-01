import Head from 'next/head';

import Header from '../components/Header';
import Main from '../components/Main';
import ParallaxSection from '../components/ParallaxSection';
import Advantages from '../components/Advantages';
import QuemSomos from '../components/QuemSomos';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Refatorando - Onde as idéias saem do papel!</title>
      </Head>

      <Header />
      <Main />

      <ParallaxSection>
        <Advantages />
        <QuemSomos />
      </ParallaxSection>

      <Footer />

    </div>
  )
}
