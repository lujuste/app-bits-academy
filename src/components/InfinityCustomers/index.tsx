import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Marquee from 'react-fast-marquee';
import { useTranslate } from '../../contexts/Translate';

const data = {
  company: [
    {
      name: 'globo',
      logo: 'globo',
    },
    {
      name: 'globo',
      logo: 'globo',
    },
    {
      name: 'globo',
      logo: 'globo',
    },
    {
      name: 'globo',
      logo: 'globo',
    },
    {
      name: 'globo',
      logo: 'globo',
    },
    {
      name: 'globo',
      logo: 'globo',
    },
    {
      name: 'globo',
      logo: 'globo',
    },
  ],
};

export default function InfinityCustomers() {
  const { t }: any = useTranslate();
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  });

  return (
    <Flex
      h="100%"
      mt={['-11rem', '-11rem', '-11rem', '-5rem', '-9.5rem']}
      fontWeight="600"
      mx="auto"
      w="100%"
      flexDir="column"
      mb="10rem"
    >
      <Text
        maxW={['200px', '290px', '500px', '800px', '1200px']}
        mx="auto"
        fontSize={['1.575rem', '1.575rem', '1.875rem', '2rem', '3rem']}
        mt={['3rem', '3rem', '10rem', '5rem', '10rem']}
        fontFamily="Maven Pro"
        textAlign={['center', 'center', 'center', 'center']}
      >
        {t.titlecustomers1}{' '}
        <Text as="span" color="purple.500">
          {t.titlecustomers2}
        </Text>{' '}
        {t.titlecustomers3}{' '}
        <Text as="span" color="purple.500">
          {t.titlecustomers4}
        </Text>
      </Text>

      {!isMobile && (
        /*  <Flex px="2rem" mx="auto">
        <Box
          sx={{
              marginTop: '3rem',
              backgroundColor: '#fff',
              color: '#eee',
              width: '100vw',
              height: '20vh',
              overflow: 'hidden',
            }}
            as="div"
            className="marquee"
          >
            <div className="marquee-content">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </div>
          </Box>
        </Flex>*/

        <Marquee
          style={{
            display: 'flex',
            marginTop: '1.5rem',
            height: '100%',
            overflow: 'hidden',
          }}
          pauseOnHover={true}
        >
          <Box
            as="image"
            w="200px"
            h="130px"
            mx="1rem"
            bgImage="url('/images/globo.svg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            display="flex"
            justifyContent="center"
            py="auto"
            overflow="hidden"
          ></Box>
          <Box
            w="200px"
            h="130px"
            mx="1rem"
            bgImage="url('/images/globo.svg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            display="flex"
            align="center"
            justifyContent="center"
            py="auto"
          ></Box>
          <Box
            w="200px"
            h="130px"
            mx="1rem"
            bgImage="url('/images/globo.svg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            display="flex"
            align="center"
            justifyContent="center"
            py="auto"
          ></Box>
          <Box
            w="200px"
            h="130px"
            mx="1rem"
            bgImage="url('/images/globo.svg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            display="flex"
            align="center"
            justifyContent="center"
            py="auto"
          ></Box>
          <Box
            w="200px"
            h="130px"
            mx="1rem"
            bgImage="url('/images/globo.svg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            display="flex"
            align="center"
            justifyContent="center"
            py="auto"
          ></Box>
          <Box
            w="200px"
            h="130px"
            mx="1rem"
            bgImage="url('/images/globo.svg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            display="flex"
            align="center"
            justifyContent="center"
            py="auto"
          ></Box>
          <Box
            w="200px"
            h="130px"
            mx="1rem"
            bgImage="url('/images/globo.svg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            display="flex"
            align="center"
            justifyContent="center"
            py="auto"
          ></Box>
          <Box
            w="200px"
            h="130px"
            mx="1rem"
            bgImage="url('/images/globo.svg')"
            bgRepeat="no-repeat"
            bgSize="contain"
            display="flex"
            align="center"
            justifyContent="center"
            py="auto"
          ></Box>
        </Marquee>
      )}

      {isMobile && (
        <Flex h="100%" justify="center" align="center">
          <Swiper
            speed={1000}
            slidesPerView={3}
            pagination={{ clickable: true }}
            style={{
              width: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
              flex: '1',
            }}
            initialSlide={3}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={5}
            centeredSlides={true}
            watchSlidesProgress
          >
            {data.company.map((item) => (
              <SwiperSlide>
                {({ isActive, isPrev, isNext }) =>
                  isActive ? (
                    <Flex
                      w="100%"
                      h="auto"
                      justify="center"
                      align="center"
                      mx="auto"
                      mt="2.5rem"
                    >
                      <Box
                        w="140px"
                        h="80px"
                        bgImage={`url('/images/${item.logo}.svg')`}
                        bgRepeat="no-repeat"
                        bgSize="contain"
                        display="flex"
                        align="center"
                        justifyContent="center"
                        py="auto"
                      ></Box>
                    </Flex>
                  ) : isPrev ? (
                    <Flex
                      w="100%"
                      h="auto"
                      justify="center"
                      align="center"
                      mx="auto"
                      mt="2.5rem"
                      transform="translateX(-50px)"
                    >
                      <Box
                        w="140px"
                        h="80px"
                        bgImage={`url('/images/${item.logo}.svg')`}
                        bgRepeat="no-repeat"
                        bgSize="contain"
                        display="flex"
                        align="center"
                        justifyContent="center"
                        py="auto"
                      ></Box>
                    </Flex>
                  ) : (
                    isNext && (
                      <Flex
                        w="100%"
                        h="auto"
                        justify="center"
                        align="center"
                        mx="auto"
                        mt="2.5rem"
                        transform="translateX(50px)"
                      >
                        <Box
                          w="140px"
                          h="80px"
                          bgImage={`url('/images/${item.logo}.svg')`}
                          bgRepeat="no-repeat"
                          bgSize="contain"
                          display="flex"
                          align="center"
                          justifyContent="center"
                          py="auto"
                        ></Box>
                      </Flex>
                    )
                  )
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      )}

      {!isMobile ? (
        <Button
          mx="auto"
          fontSize="1.25rem"
          bgGradient="linear(to-b, #793399, #4B2076)"
          color="white"
          w="100%"
          h="100%"
          p="1.5rem"
          justifyContent="center"
          maxW={['200px', '200px', '360px', '474px']}
          borderRadius="10px"
          boxShadow="2xl"
          mt={['0', '0', '0', '0', '-3.5rem']}
          _hover={{
            bgGradient: 'linear(to-t, #4B2076, #360666)',
          }}
          textAlign="center"
        >
          {t.customersbtn}
        </Button>
      ) : (
        <Button
          mx="auto"
          fontSize="1.25rem"
          bgGradient="linear(to-b, #793399, #4B2076)"
          color="white"
          w="100%"
          h="100%"
          p="0.75rem"
          justifyContent="center"
          maxW={['285px', '285px', '360px', '474px']}
          borderRadius="10px"
          boxShadow="2xl"
          mt="3rem"
          textAlign="center"
          _hover={{
            bgGradient: 'linear(to-t, #4B2076, #360666)',
          }}
        >
          {t.customersbtn1} <br /> {t.customersbtn2}
        </Button>
      )}
    </Flex>
  );
}
