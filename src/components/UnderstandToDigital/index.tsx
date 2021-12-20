import {
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Box,
  Button,
  useBreakpointValue,
  List,
  ListItem,
  ListIcon,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { isSafari, isMobileSafari, isChrome } from 'react-device-detect';

// @ts-ignore: Unreachable code error
import Fade from 'react-reveal/Fade';

import { BsTriangleFill } from 'react-icons/bs';
import { MdGraphicEq } from 'react-icons/md';
import { useState, useRef, useEffect } from 'react';
import iconPlay from '../../../public/images/icon-play.svg';
const videoURL = 'http://localhost:3000/images/whydigital.mp4';

import graphicHome from '../../../public/images/graphic-desk.svg';
import graphicHomeMobile from '../../../public/images/graphic-mobile.svg';
import { useTranslate } from '../../contexts/Translate';

export default function UnderstandToDigital() {
  const { t }: any = useTranslate();

  const $videoPlayer: any = useRef(null);

  // @ts-ignore: Unreachable code error

  function usePlayerState($videoPlayer) {
    const [playerState, setPlayerState] = useState({
      playing: false,
      percentage: 0,
    });

    useEffect(() => {
      playerState.playing
        ? $videoPlayer.current.play()
        : $videoPlayer.current.pause();
    }, [playerState.playing]);

    function toggleVideoPlay() {
      console.log($videoPlayer);
      setPlayerState({
        ...playerState,
        playing: !playerState.playing,
      });
    }

    function handleTime() {
      const currentPercentage =
        ($videoPlayer.current?.currentTime / $videoPlayer.current?.duration) *
        100;
      setPlayerState({
        ...playerState,
        percentage: currentPercentage,
      });
    }

    // @ts-ignore: Unreachable code error

    function handleChangeVideoPercentage(event) {
      const currentPercentageValue = event;
      $videoPlayer.current.currentTime =
        ($videoPlayer.current?.duration / 100) * currentPercentageValue;

      setPlayerState({
        ...playerState,
        percentage: currentPercentageValue,
      });
    }

    return {
      playerState,
      toggleVideoPlay,
      handleTime,
      handleChangeVideoPercentage,
    };
  }

  const {
    playerState,
    toggleVideoPlay,
    handleTime,
    handleChangeVideoPercentage,
  } = usePlayerState($videoPlayer);

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
    md: true,
    lg: true,
    xl: false,
  });

  return (
    <Flex
      mt="-6rem"
      w="100%"
      mx="auto"
      justify="center"
      bgColor="#F4F4F4"
      h="100%"
      py="5rem"
      mb="2rem"
      px={[0, 0, '3rem']}
      id="sectionDigital"
    >
      <Flex flexDir="column" maxW="1400px" h="100%" justify="center" mx="auto">
        <Flex justify="center" flexDir="column">
          {isMobile ? (
            <Fade bottom>
              <Heading
                fontFamily="Maven Pro"
                fontSize={['1.75rem', '1.75rem', '2.813rem']}
                fontWeight="600"
                textAlign="center"
                alignSelf="center"
                maxW={['380px', '420px', '783px']}
                mt={['-2rem', '-2rem', '0']}
                w="100%"
                color="black"
                mb="1.5rem"
              >
                {t.mobile_title_video_area}{' '}
                <Text fontWeight="700" as="span" color="purple.500">
                  {' '}
                  <Text as="span"> {t.mobile_title1_video} </Text>{' '}
                  {`${t.mobile_title2_video}`}
                </Text>{' '}
              </Heading>
            </Fade>
          ) : (
            <Heading
              fontFamily="Maven Pro"
              fontSize={['1.75rem', '1.75rem', '2.813rem']}
              fontWeight="600"
              textAlign="center"
              alignSelf="center"
              maxW={['380px', '420px', '783px']}
              mt={['-2rem', '-2rem', '0']}
              w="100%"
              color="black"
              mb="1.5rem"
            >
              <Fade bottom>
                {t.mobile_title_video_area}{' '}
                <Text fontWeight="700" color="purple.500">
                  {' '}
                  <Text as="span"> {t.mobile_title1_video} </Text>{' '}
                  {t.mobile_title2_video}
                </Text>{' '}
              </Fade>
            </Heading>
          )}

          <Grid
            mt="2rem"
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
            ]}
            gridAutoFlow={'dense'}
            gap={['4rem', '4rem', '5rem', '6rem']}
          >
            <GridItem mt={['-1rem', '-1rem', '0']} alignItems={'center'}>
              <Flex flexDir="column">
                <Fade bottom>
                  <Text
                    as="h2"
                    py="auto"
                    mx="auto"
                    alignItems={'center'}
                    maxW="517px"
                    textAlign={['center', 'center', 'justify', 'justify']}
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                    px={['1rem', '1rem', '0']}
                  >
                    Chegamos em um momento em que as empresas podem escolher se
                    elas participam do mundo digital ou se querem estar fora do
                    mercado. <br />
                    <br /> Isso ficou muito claro durante o período de lockdown
                    imposto pela pandemia. Nessa época, vimos muitas empresas
                    sofrerem com o fato de não serem digitais. Logicamente, como
                    esse movimento foi muito brusco, algumas empresas quebraram
                    no meio do caminho, antes de conseguirem se digitalizar.{' '}
                    <br />
                    <br /> No entanto, isso foi só um exemplo da importância de
                    uma empresa fazer sua transformação digital. Os negócios
                    estão se tornando cada vez mais dependentes de processos e
                    tecnologias digitais.
                  </Text>
                </Fade>
              </Flex>
            </GridItem>
            <GridItem
              gridRow={isWideVersion ? '' : '1'}
              alignSelf={'center'}
              alignItems={'center'}
            >
              <Flex justify="center" mx="auto" flexDir="column">
                <Box
                  maxW={['330px', '330px', '499px']}
                  w="100%"
                  mx="auto"
                  h={['182px', '182px', '280px']}
                  borderRadius="10px"
                  bgColor="transparent"
                  mt={['-1rem', '-1rem', '0']}
                  boxShadow={'2xl'}
                  position="relative"
                >
                  <video
                    ref={$videoPlayer}
                    className="video-ok"
                    src={videoURL}
                    playsInline
                    width="100%"
                    height="100%"
                    controls={isChrome ? false : true}
                    poster="/images/thumbnail.png"
                    style={{
                      cursor: 'pointer',
                      width: '100%',
                      backgroundSize: 'cover !important',
                    }}
                    preload="none"
                    autoSave="false"
                    onClick={toggleVideoPlay}
                    controlsList="nodownload"
                    onTimeUpdate={handleTime}
                  >
                    <source src="/images/whydigital.mp4" type="video/mp4" />
                  </video>
                  {playerState.playing
                    ? ''
                    : !isSafari && (
                        <Icon
                          position="absolute"
                          top="38%"
                          className="iconPlay"
                          left="43%"
                          right="0"
                          w="100px"
                          onClick={toggleVideoPlay}
                          h="100px"
                          textAlign="center"
                          cursor="pointer"
                          as={iconPlay}
                        />
                      )}
                </Box>
                <Flex mt="2rem" mx="auto" w="300px" h="20px">
                  <Slider
                    onChange={(e) => handleChangeVideoPercentage}
                    value={playerState.percentage}
                  >
                    <SliderTrack bg="#e3d2f4">
                      <Box position="relative" right={10} />
                      <SliderFilledTrack bg="purple.500" />
                    </SliderTrack>
                    <SliderThumb
                      color="purple.500"
                      as={MdGraphicEq}
                      boxSize={6}
                    />
                  </Slider>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
          <Fade bottom>
            <Text
              as="h2"
              py="auto"
              alignItems={'center'}
              maxW="627px"
              textAlign={['center', 'center', 'justify', 'justify']}
              color="black"
              fontSize={['1rem', '1rem', '1rem']}
              fontFamily={'Maven Pro'}
              px={['2rem', '2rem', '0']}
              mt="2rem"
            >
              Podemos dar inúmeras razões para você se digitalizar. Algumas
              delas são:
            </Text>
          </Fade>
          <Grid
            gap={[0, 0, 20, 20]}
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
            ]}
          >
            <GridItem>
              {' '}
              <Fade bottom>
                <List px={['1.5rem', '1.5rem', '0']} mt="2rem" spacing={5}>
                  <ListItem
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                  >
                    <ListIcon
                      transform="rotate(90deg)"
                      as={BsTriangleFill}
                      color="purple.500"
                    />
                    Usar dados para tomar decisões;
                  </ListItem>
                  <ListItem
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                  >
                    <ListIcon
                      transform="rotate(90deg)"
                      as={BsTriangleFill}
                      color="purple.500"
                    />
                    Controlar seus resultados;
                  </ListItem>
                  <ListItem
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                  >
                    <ListIcon
                      transform="rotate(90deg)"
                      as={BsTriangleFill}
                      color="purple.500"
                    />
                    Enxergar seus processos em tempo real;
                  </ListItem>

                  <ListItem
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                  >
                    <ListIcon
                      transform="rotate(90deg)"
                      as={BsTriangleFill}
                      color="purple.500"
                    />
                    Antever problemas na sua empresa;
                  </ListItem>
                </List>
              </Fade>
            </GridItem>
            <GridItem>
              <Fade bottom>
                <List px={['1.5rem', '1.5rem', '0']} mt="2rem" spacing={5}>
                  <ListItem
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                    textAlign="left"
                  >
                    <ListIcon
                      transform="rotate(90deg)"
                      as={BsTriangleFill}
                      color="purple.500"
                    />
                    Ajustar estratégias para alcançar os objetivos da sua
                    empresa;
                  </ListItem>
                  <ListItem
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                  >
                    <ListIcon
                      transform="rotate(90deg)"
                      as={BsTriangleFill}
                      color="purple.500"
                      justifyItems="initial"
                    />
                    Se tornar mais eficiente;
                  </ListItem>
                  <ListItem
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                  >
                    <ListIcon
                      transform="rotate(90deg)"
                      as={BsTriangleFill}
                      color="purple.500"
                    />
                    Diminuir as despesas da sua empresa;
                  </ListItem>

                  <ListItem
                    color="black"
                    fontSize={['1rem', '1rem', '1rem']}
                    fontFamily={'Maven Pro'}
                  >
                    <ListIcon
                      transform="rotate(90deg)"
                      as={BsTriangleFill}
                      color="purple.500"
                    />
                    Criar novos produtos e serviços.
                  </ListItem>
                </List>
              </Fade>
            </GridItem>
          </Grid>
          <Flex
            mx="auto"
            flexDir="column"
            maxW="1400px"
            w="100%"
            h="auto"
            mt="3.5rem"
          >
            <Fade bottom>
              <Text
                color="black"
                fontSize={['1rem', '1rem', '1rem']}
                fontFamily={'Maven Pro'}
                maxW="785px"
                textAlign="center"
                mx="auto"
                mb={['2rem', '2rem', '1.5rem']}
                mt={['-2rem', '-2rem', 0]}
                px={['1.5rem', '1.5rem', '0.5rem']}
              >
                Como nem tudo é perfeito, durante esse processo de transformação
                digital você vai encontrar alguns desafios. Os principais
                desafios que você vai enfrentar são:
              </Text>
            </Fade>

            {!isMobile ? (
              <Flex w="100%" h="auto">
                <Fade bottom>
                  <Icon w="100%" h="100%" as={graphicHome} />
                </Fade>
              </Flex>
            ) : (
              <Flex maxW="900px" mx="auto" h="auto">
                <Fade bottom>
                  <Icon mx="auto" w="100%" h="100%" as={graphicHomeMobile} />
                </Fade>
              </Flex>
            )}
            <Fade bottom>
              <Text
                mt={['1rem', '1rem', '2rem']}
                fontSize={['1rem', '1rem', '1rem']}
                fontFamily={'Maven Pro'}
                maxW="785px"
                textAlign="center"
                px={['1.5rem', '1.5rem', '0']}
                mx="auto"
              >
                A Bits Academy vai te ajudar exatamente nesse processo. Vamos
                selecionar as plataformas que resolvem seus problemas ou atingem
                seus objetivos, depois treinaremos o seu time e acompanharemos a
                implementação das soluções para que a digitalização da sua
                empresa seja bem-sucedida.
              </Text>
            </Fade>
          </Flex>
        </Flex>
        {isMobile ? (
          <Fade bottom>
            <Flex w="100%" h="auto" mx="auto">
              <Button
                color="white"
                px="1rem"
                bgGradient="linear(to-b, #793399, #4B2076)"
                maxW={['290px', '220px', '560px']}
                h="100px"
                mt="2rem"
                lineHeight={'27px'}
                fontWeight="bold"
                borderRadius="10px"
                boxShadow="dark-lg"
                justifyContent="center"
                alignItems="center"
                w="100%"
                fontSize={['1.1rem']}
                mx="auto"
                _hover={{
                  bgGradient: 'linear(to-t, #4B2076, #360666)',
                }}
              >
                QUERO SABER MAIS SOBRE <br /> TRANSFORMAÇÃO DIGITAL
              </Button>
            </Flex>
          </Fade>
        ) : (
          <Fade bottom>
            <Flex w="100%" h="auto" mx="auto">
              <Button
                color="white"
                px="1rem"
                bgGradient="linear(to-b, #793399, #4B2076)"
                maxW={['320px', '320px', '560px']}
                h="60px"
                mt="2rem"
                justifyContent="center"
                alignItems="center"
                w="100%"
                _hover={{
                  bgGradient: 'linear(to-t, #4B2076, #360666)',
                }}
                fontSize={['0.8rem', '0.5rem', '0.875rem']}
                mx="auto"
              >
                QUERO SABER MAIS SOBRE TRANSFORMAÇÃO DIGITAL
              </Button>
            </Flex>
          </Fade>
        )}
      </Flex>
    </Flex>
  );
}
