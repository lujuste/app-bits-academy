import type { NextPage } from 'next';
import Header from '../shared/components/Header';
import HomeScreen from '../components/HomeScreen/index';

import InfinityCustomers from '../components/InfinityCustomers';
import Footer from '../shared/components/Footer';
import History from '../components/History';
import UnderstandToDigital from '../components/UnderstandToDigital';
import Typeform from '../components/Typeform';

const Home: NextPage = () => {
  return (
    <>
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
