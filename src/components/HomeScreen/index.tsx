import { NextPage } from 'next';
import { Flex, Heading, Text, useBreakpointValue, Box } from '@chakra-ui/react';
// @ts-ignore: Unreachable code error
import Fade from 'react-reveal/Fade';
import '@fontsource/baloo-bhaina-2';
import RaysIcon from '../RaysIcon/index';
import HomeButton from '../HomeButton';
import IFreeTestYourCompanyDigitalProps from '../FreeTestYourCompanyDigital';

import { useRouter } from 'next/router';

import { useTranslate } from '../../contexts/Translate';
import RaysIconMobile from '../RaysIconMobile';

const HomeScreen: NextPage = () => {
  function scrollToYes() {
    window.scrollTo({
      top: 3150,
      behavior: 'smooth',
    });
  }
  function scrollToYesMobile() {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  }

  function scrollToNo() {
    window.scrollTo({
      top: 1900,
      behavior: 'smooth',
    });
  }

  function scrollToNoMobile() {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  }

  const router = useRouter();
  const { t }: any = useTranslate();

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });

  return (
    <Flex
      as="section"
      flexDir="column"
      mx="auto"
      w="100%"
      h={isMobile ? '80vh' : '80vh'}
      bgGradient="linear(to-t, #000, #663399)"
      position="relative"
      className="section-stars"
    >
      {!isMobile && (
        <>
          <Flex
            position="absolute"
            bgSize="cover"
            display="flex"
            maxW="100%"
            h="100%"
            opacity="0.9"
            transform={[
              'translateX(-390px) translateY(20px)',
              'translateX(-190px) translateY(0px)',
              'translateX(-190px) translateY(-70px)',
              'translateX(-220px) translateY(-150px)',
              'translateX(-260px) translateY(-150px)',
              'translateX(-200px) translateY(-170px)',
            ]}
            mt="10rem"
          >
            <RaysIcon />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Flex>
        </>
      )}

      {isMobile && (
        <Flex
          opacity="0.9"
          position="absolute"
          w="100%"
          h="100%"
          right="10%"
          overflow="hidden"
        >
          <RaysIconMobile />
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Flex>
      )}

      <Flex
        flexDir="column"
        mx="auto"
        mt={isWideVersion ? `0` : '-3rem'}
        justify="center"
        align="center"
        maxW="1400px"
        h="100%"
      >
        <IFreeTestYourCompanyDigitalProps />
        <Fade bottom>
          <Heading
            color="white"
            fontSize={['2.188rem', '2.188rem', '3rem']}
            fontFamily="Maven Pro"
            fontWeight="200"
            textAlign="center"
            lineHeight={['3rem', '3rem', '5rem']}
            transform="translateY(40px)"
            justifyContent="center"
            mt={['10rem', '16rem', '10rem', '12rem', '12rem']}
          >
            {t.title1}{' '}
            <Text
              fontSize={['3.438rem', '3.438rem', '5.625rem']}
              fontFamily="Baloo 2"
              fontWeight="700"
            >
              {t.title2}
            </Text>
          </Heading>
        </Fade>
      </Flex>

      <Flex
        transform={isWideVersion ? 'translateY(100px)' : 'translateY(110px)'}
        w="100%"
        h="auto"
        justify="space-between"
        py="4rem"
        px={['1rem', '2rem', '0']}
        maxW={['400px', '400px', '400px', '500px', '1010px']}
        mx="auto"
        zIndex={'920'}
        className="btnHomeFlex"
      >
        {isMobile ? (
          <>
            <HomeButton
              colorOne="#DFDFDF"
              colorTwo="#FFF"
              text={t.btnhome2}
              shadow="2xl"
              textColor="purple.500"
              href="#sectionDigital"
              zIndex="999"
              onClick={scrollToNoMobile}
              _hover={{
                bgGradient: 'linear(to-t, white, white)',
              }}
            />

            <HomeButton
              colorOne="#4B2076"
              colorTwo="#663399"
              text={t.btnhome1}
              shadow="dark-lg"
              textColor="#FFF"
              href="#typeformSection"
              onClick={scrollToYesMobile}
              _hover={{
                bgGradient: 'linear(to-t, #4B2076, #360666)',
              }}
              mb="1rem"
              zIndex={'910'}
            />
          </>
        ) : (
          <>
            <HomeButton
              colorOne="#4B2076"
              colorTwo="#663399"
              text={t.btnhome1}
              shadow="dark-lg"
              textColor="#FFF"
              href="#typeformSection"
              onClick={scrollToYes}
              transition={'bgGradient ease 2000s'}
              _hover={{
                bgGradient: 'linear(to-t, #4B2076, #360666)',
              }}
              _active={{ border: 'none', borderColor: 'transparent' }}
              _focus={{ border: 'none', borderColor: 'transparent' }}
              mb="1rem"
              zIndex="9999"
            />
            <HomeButton
              colorOne="#DFDFDF"
              colorTwo="#FFF"
              text={t.btnhome2}
              shadow="2xl"
              textColor="purple.500"
              href="#sectionDigital"
              zIndex="9999"
              onClick={scrollToNo}
              _active={{ border: 'none', borderColor: 'transparent' }}
              _focus={{ border: 'none', borderColor: 'transparent' }}
              _hover={{
                bgGradient: 'linear(to-t, white, white)',
              }}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
