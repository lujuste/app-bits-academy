import {
  Flex,
  Grid,
  GridItem,
  Text,
  Button,
  List,
  ListItem,
  Heading,
  useBreakpointValue,
  Divider,
  Image,
  Spinner,
} from '@chakra-ui/react';
import IconCall from './icons/IconCall';
import IconMail from './icons/IconMail';
import { Input } from '../Form';
import LocationIcon from './icons/LocationIcon';
import IconInstagram from './icons/IconInstagram';
import IconFacebook from './icons/IconFacebook';
import IconLinkedin from './icons/IconLinkedin';
import IconBitsWhite from '../IconBitsWhite';

export default function Footer() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
  });

  return (
    <>
      <Flex
        as="footer"
        w="100%"
        h={['100%', '100%', '100%', '396px']}
        bgGradient="linear(to-t, #000, #663399)"
        mt={['-2rem', '-2rem', '-3rem']}
        mx="auto"
        justify="center"
        align="center"
        alignItems="center"
      >
        {isWideVersion ? (
          <>
            <Flex
              maxW={1400}
              h="100%"
              w="100%"
              mx="auto"
              alignItems="center"
              flexDir="column"
              justify="center"
              align="center"
            >
              <Grid
                mx="2rem"
                h="80%"
                py="2rem"
                templateColumns="repeat(4, 1fr)"
                gap={20}
              >
                <Flex justify="space-around" flexDir="column">
                  <IconBitsWhite />

                  <Text color="white">Saiba onde nos encontrar</Text>
                  <Flex>
                    <LocationIcon />
                    <Text ml="10px" color="white">
                      R.Fidêncio Ramos, 101, <br />
                      Vila Olímpia, São Paulo/SP <br />
                    </Text>
                  </Flex>

                  <Flex>
                    <IconMail />
                    <Text ml="10px" color="white">
                      contato@bitsacademy.com.br{' '}
                    </Text>
                  </Flex>

                  <Flex>
                    <IconCall />
                    <Text ml="10px" color="white">
                      +55 11 98425-9825
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  justify={['center', 'center', 'space-around']}
                  flexDir="column"
                >
                  <List color="white">
                    <ListItem fontFamily="Roboto" fontWeight="700" mb="1rem">
                      Serviços
                    </ListItem>
                    <Divider
                      width="160px"
                      border="1px"
                      borderColor="white"
                      orientation="horizontal"
                    ></Divider>
                    <ListItem mt="0.5rem">Marketing Digital</ListItem>
                    <ListItem mt="0.5rem">Vendas</ListItem>
                    <ListItem mt="0.5rem">Legal Design</ListItem>
                    <ListItem mt="0.5rem">Transformação digital</ListItem>
                    <ListItem mt="0.5rem">Treinamentos</ListItem>
                    <ListItem mt="0.5rem">Cursos</ListItem>
                  </List>
                </Flex>
                <GridItem mt="0.5rem">
                  <List color="white">
                    <ListItem mb="0.9rem" fontFamily="Roboto" fontWeight="700">
                      Outros
                    </ListItem>
                    <Divider
                      width="160px"
                      border="1px"
                      borderColor="white"
                      orientation="horizontal"
                    ></Divider>
                    <ListItem mt="0.5rem" mb="1rem">
                      Blog
                    </ListItem>
                    <ListItem mb="1rem">Materiais Gratuitos</ListItem>
                    <ListItem mb="1rem">Notícias</ListItem>
                    <ListItem mb="1rem">Casos de sucesso</ListItem>
                    <ListItem mb="1rem">Política de privacidade</ListItem>
                  </List>
                </GridItem>
                <GridItem>
                  <Flex as="form" method="post" flexDir="column">
                    <Text
                      as="h4"
                      fontSize="16px"
                      fontFamily="Roboto"
                      fontWeight="700"
                      color="white"
                      mb="1rem"
                    >
                      {' '}
                      Inscreva-se em nossa newsletter{' '}
                    </Text>
                    <Input
                      mb="0.5rem"
                      id="email"
                      name="email"
                      type="email"
                      label="Seu email"
                    />

                    <Button
                      mb="1rem"
                      color="#fff"
                      h="45px"
                      mt="0.2rem"
                      bgGradient="linear(to-t, #793399, #4B2076)"
                      _hover={{ bgColor: 'green.900' }}
                      type="submit"
                      boxShadow="2xl"
                    >
                      Enviar
                    </Button>
                  </Flex>

                  <Flex mt="1rem" maxW="100px" w="100%" justify="space-between">
                    <IconInstagram />
                    <IconFacebook />
                    <IconLinkedin />
                  </Flex>
                </GridItem>
              </Grid>

              <Flex
                justify="center"
                alignItems="center"
                align="center"
                mx="auto"
                mt="1rem"
              >
                <Text fontSize="14px" color="#ffffff">
                  Copyright © 2021 Bits Academy. All rights reserved. CNPJ nº
                  35.070.508/0001-40.
                </Text>
              </Flex>
            </Flex>
          </>
        ) : (
          <Flex
            maxW={780}
            px="2rem"
            h="100%"
            w="100%"
            mx="auto"
            flexDir={['column']}
          >
            <Image
              src="/images/bits-logo-white.svg"
              w="60px"
              h="28px"
              mt="3rem"
              mb="2rem"
              alt="logo bits academy"
            />

            <Divider orientation="vertical" />

            <Flex>
              <LocationIcon />
              <Text ml="10px" color="white">
                R.Fidêncio Ramos, 101, <br />
                Vila Olímpia, São Paulo/SP <br />
              </Text>
            </Flex>

            <Flex mt="1rem">
              <IconMail />
              <Text ml="10px" color="white">
                contato@bitsacademy.com.br{' '}
              </Text>
            </Flex>

            <Flex mt="1rem">
              <IconCall />
              <Text ml="10px" color="white">
                +55 11 98425-9825
              </Text>
            </Flex>

            <Flex mt="1.5rem" justify="space-between">
              <Flex flexDir="column">
                <Heading
                  mb="0.5rem"
                  fontFamily="Roboto"
                  color="white"
                  fontSize="16px"
                >
                  Serviços
                </Heading>
                <Divider
                  color="white"
                  size="10px"
                  mb="0.5rem"
                  orientation="horizontal"
                />
                <List color="white">
                  <ListItem>Marketing Digital</ListItem>
                  <ListItem>Vendas</ListItem>
                  <ListItem>Legal Design</ListItem>
                  <ListItem>Transformação digital</ListItem>
                  <ListItem>Treinamentos</ListItem>
                </List>
              </Flex>
              <Flex flexDir="column">
                <Heading
                  mb="0.5rem"
                  fontFamily="Roboto"
                  color="white"
                  fontSize="16px"
                >
                  Outros
                </Heading>
                <Divider
                  color="white"
                  size="10px"
                  mb="0.5rem"
                  orientation="horizontal"
                />
                <List color="white">
                  <ListItem>Blog</ListItem>
                  <ListItem>Política de privacidade</ListItem>
                </List>
              </Flex>
            </Flex>
            <Flex as="form" flexDir="column">
              <Heading
                mt="1.5rem"
                fontFamily="Roboto"
                color="white"
                fontSize="16px"
                mb="1rem"
              >
                Inscreva-se em nossa newsletter
              </Heading>
              <Input
                mb="0.5rem"
                id="email"
                name="email"
                type="email"
                label="Seu email"
                h="60px"
              />
              <Button
                h="60px"
                mb="1rem"
                bgGradient="linear(to-t, #793399, #4B2076)"
                color="white"
                _hover={{ bgColor: 'green.900' }}
                type="submit"
              >
                Enviar
              </Button>
            </Flex>
            <Flex
              mt="0.5rem"
              maxW="100px"
              w="100%"
              justifyContent="space-between"
            >
              <IconInstagram />
              <IconFacebook />
              <IconLinkedin />
            </Flex>
            <Flex mt={['2rem']} maxW="300px" w="100%" color="white" mx="auto">
              <Text
                mb={['2rem', '2rem', '0']}
                fontSize="14px"
                textAlign="center"
              >
                Copyright © 2021 Bits Academy. All rights reserved. CNPJ nº
                35.070.508/0001-40.
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
}
