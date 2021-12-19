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
        gap={20}
        alignContent="center"
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
        ]}
      >
        <GridItem>
          <Heading
            px={['1rem', '1rem', '0']}
            maxW="574px"
            fontSize={['1.563rem', '1.563rem', '2.813rem']}
            fontFamily="Maven Pro"
            h="auto"
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
          <Text
            fontFamily="Maven Pro"
            fontWeight="400"
            color="#666666"
            textAlign={['center', 'center', 'left']}
            mt={['2rem']}
            maxW="600px"
            px={['1rem', '1rem', '0']}
          >
            {t.titlehistory5}
          </Text>
        </GridItem>
        <GridItem>
          {!isMobile ? (
            <Flex mx="auto" justify="center" w="100%" h="auto">
              <Box
                mt={['-3rem', '-2rem', '0']}
                maxW={['400px']}
                h="500px"
                as={isMobile ? timelineIconMobile : timelineIcon}
              ></Box>
            </Flex>
          ) : (
            <Flex
              mt={['-3rem', '-2rem', '0']}
              maxW={['400px']}
              h="500px"
              bgImage="url('/images/timelineMobile.webp')"
              bgSize="contain"
              bgRepeat="no-repeat"
            ></Flex>
          )}
        </GridItem>
      </Grid>
    </Flex>
  );
}
