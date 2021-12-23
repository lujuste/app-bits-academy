import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Icon,
  useBreakpointValue,
  useBreakpoint,
  Box,
} from '@chakra-ui/react';
import timelineIcon from '../../../public/images/iconn.svg';
import timelineIconMobile from '../../../public/images/icon-mobile.svg';
import { useTranslate } from '../../contexts/Translate';

import Image from 'next/image';
import timelineSafari from '../../../public/images/timelineSafari.webp';

// @ts-ignore: Unreachable code error
import Fade from 'react-reveal/Fade';
import { isSafari } from 'react-device-detect';

export default function History() {
  const { t }: any = useTranslate();

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    xl: false,
  });

  return (
    <Flex
      px="1.5rem"
      py="5rem"
      maxW="1400px"
      justify="center"
      mx="auto"
      w="100%"
      h="100%"
      zIndex="9999"
    >
      <Grid
        mt="5rem"
        mx="auto"
        justifyContent={'center'}
        gap={[20]}
        alignContent="center"
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
        ]}
      >
        <GridItem ml={['0', '0', '0rem', '1.5rem', '1.5rem']}>
          <Fade bottom>
            <Heading
              px={['1rem', '1rem', '0']}
              maxW="574px"
              fontSize={[
                '1.563rem',
                '1.563rem',
                '1.563rem',
                '2rem',
                '2.813rem',
              ]}
              fontFamily="Maven Pro"
              h="auto"
              ml={['0', '0', '1.5rem', '1.5rem', '1.5rem', '0']}
              mt={['-4rem', '-3rem', '0', '0']}
              textAlign={['center', 'center', 'left']}
            >
              {t.history1}{' '}
              <Text color="purple.500" as="span">
                {t.titlebitsacademy}
              </Text>{' '}
              {t.titlehistory2}{' '}
              <Text as="span" color="purple.500">
                {t.titlehistory3}{' '}
              </Text>
              {t.titlehistory4}
            </Heading>
          </Fade>

          <Fade bottom>
            <Text
              fontFamily="Maven Pro"
              fontWeight="400"
              color="#666666"
              textAlign={['center', 'center', 'left']}
              mt={['2rem']}
              maxW="600px"
              px={['1rem', '1rem', '0']}
              ml={['0', '0', '1.5rem', '1.5rem', '1.5rem', '0']}
            >
              {t.titlehistory5}
            </Text>
          </Fade>
        </GridItem>
        <GridItem>
          {!isMobile ? (
            <Flex mx="auto" justify="center" w="100%" h="auto">
              <Fade bottom>
                {!isSafari ? (
                  <Box
                    textAlign="center"
                    display="flex"
                    align="center"
                    mx="auto"
                    mt={['-3rem', '-2rem', '0']}
                    maxW={['400px']}
                    h="500px"
                    as={isMobile ? timelineIconMobile : timelineIcon}
                  ></Box>
                ) : (
                  <Image
                    src={timelineSafari}
                    width={390}
                    height={479}
                    priority
                    quality={100}
                  />
                )}
              </Fade>
            </Flex>
          ) : (
            <Fade bottom>
              <Flex
                mt={['-3.5rem', '-2rem', '0']}
                maxW={['400px']}
                mx="auto"
                h="500px"
                bgImage="url('/images/timelineMobile.webp')"
                bgSize="contain"
                bgRepeat="no-repeat"
                mb={['1.5rem', '1.5rem', '0']}
              ></Flex>
            </Fade>
          )}
        </GridItem>
      </Grid>
    </Flex>
  );
}
