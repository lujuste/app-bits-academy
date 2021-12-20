import type { NextPage } from 'next';
import Header from '../shared/components/Header';
import HomeScreen from '../components/HomeScreen/index';
import Head from 'next/head';
import InfinityCustomers from '../components/InfinityCustomers';
import Footer from '../shared/components/Footer';
import History from '../components/History';
import UnderstandToDigital from '../components/UnderstandToDigital';
import Typeform from '../components/Typeform';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bits Academy - Transformação digital </title>
        <meta
          name="description"
          content="Bits Academy ajuda sua empresa a entrar no digital para aproveitar as vantagens que a internet traz para o seu negócio."
        />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Bits Academy - Home" key="ogtitle" />
        +{' '}
        <meta
          property="og:description"
          content="Você quer se digitalizar?"
          key="ogdesc"
        />
        <meta property="og:url" content={'http://localhost:3000'} key="ogurl" />
        <meta
          property="og:site_name"
          content="Bits Academy - A transformação digital para sua empresa"
          key="ogsitename"
        />
        <meta
          property="og:image"
          content="https://legal-design-nextjs2.vercel.app/public/images/treinamento.png"
          key="ogimage"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="Legal Design" key="twcard" />
        <meta name="twitter:creator" content="Bits Academy" key="twhandle" />
      </Head>
      <Header />
      <HomeScreen />
      <History />
      <InfinityCustomers />
      <UnderstandToDigital />
      <Typeform />
      <Footer />
    </>
  );
};

export default Home;
