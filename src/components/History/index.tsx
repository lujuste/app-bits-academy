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

export default function History() {
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
            A{' '}
            <Text color="purple.500" as="span">
              Bits Academy
            </Text>{' '}
            ajuda sua empresa a entrar no digital para aproveitar as{' '}
            <Text as="span" color="purple.500">
              vantagens{' '}
            </Text>
            que a internet traz para o seu negócio.
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
            Em 2021 a Bits Academy ganhou o prêmio 100 Open Startups, sendo
            reconhecida como uma boa oportunidade de investimento e parceira de
            grandes corporações em inovação aberta no segmento EDTECH. Também
            foi nomeada como uma das 10 finalistas do Startup Awards 2021 na
            categoria Startup Revelação. No mesmo ano, também participou do
            programa Shark Tank conseguindo atrair o interesse de investidores
            no programa.
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
