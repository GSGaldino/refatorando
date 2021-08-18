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
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Refatorando - Onde as idéias saem do papel. Sites responsivos e dinâmicos, com tecnologias de ponta." />
        <meta name="robots" content="all" />
        <meta name="author" content="Refatorando" />
        <meta name="keywords" content="refatorando, tecnologia, site, criador, website, fábrica, software, programa, orçamento, página, web, react, idéias, ideias, Refatorando" />
        <meta property="og:type" content="page" />
        <meta property="og:url" content="https://refatorando.com.br" />
        <meta property="og:title" content="Refatorando" />
        <meta property="og:image" content="http://refatorando.com.br/logo.svg" />
        <meta property="og:description" content="Onde as idéias saem do papel!" />
        <meta property="article:author" content="Refatorando" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="Refatorando" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:description" content="Onde as idéias saem do papel!" />
          
        {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-204838861-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    
              ga('create', 'UA-204838861-1', 'auto');
              ga('send', 'pageview', {
                'dimension1': 'gabriel.galdino@code7.com'
              });
            `,
            }}
          />
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
