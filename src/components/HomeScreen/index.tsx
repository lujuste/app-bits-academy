import { NextPage } from 'next';
import { Flex, Heading, Text, useBreakpointValue, Box } from '@chakra-ui/react';

import Image from 'next/image';
import '@fontsource/baloo-bhaina-2';
import RaysIcon from '../RaysIcon/index';
import HomeButton from '../HomeButton';
import IFreeTestYourCompanyDigitalProps from '../FreeTestYourCompanyDigital';

import { useRouter } from 'next/router';

import { useTranslate } from '../../contexts/Translate';

const HomeScreen: NextPage = () => {
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
            digitalizar?
          </Text>
        </Heading>
      </Flex>

      <Flex
        transform={isWideVersion ? 'translateY(100px)' : 'translateY(95px)'}
        w="100%"
        h="auto"
        justify="space-between"
        py="4rem"
        px={['1rem', '2rem', '0']}
        maxW={['400px', '400px', '400px', '500px', '1010px']}
        mx="auto"
        zIndex={'920'}
      >
        {isMobile ? (
          <>
            <HomeButton
              colorOne="#DFDFDF"
              colorTwo="#FFF"
              text="NÃO"
              shadow="2xl"
              textColor="purple.500"
              href="/"
              zIndex="999"
              _hover={{
                bgGradient: 'linear(to-t, white, white)',
              }}
            />

            <HomeButton
              colorOne="#4B2076"
              colorTwo="#663399"
              text="SIM"
              shadow="dark-lg"
              textColor="#FFF"
              href="/"
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
              text="SIM"
              shadow="dark-lg"
              textColor="#FFF"
              href="/"
              _hover={{
                bgGradient: 'linear(to-t, #4B2076, #360666)',
              }}
              mb="1rem"
              zIndex={'910'}
            />
            <HomeButton
              colorOne="#DFDFDF"
              colorTwo="#FFF"
              text="NÃO"
              shadow="2xl"
              textColor="purple.500"
              href="/"
              zIndex="999"
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
