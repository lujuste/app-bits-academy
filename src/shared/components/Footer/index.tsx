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
  HStack,
  Spinner,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import IconCall from './icons/IconCall';
import IconMail from './icons/IconMail';
import { Input } from '../Form';
import LocationIcon from './icons/LocationIcon';
import IconInstagram from './icons/IconInstagram';
import IconFacebook from './icons/IconFacebook';
import IconLinkedin from './icons/IconLinkedin';
import IconBitsWhite from '../IconBitsWhite';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslate } from '../../../contexts/Translate';

import NextLink from 'next/link';

import { toast } from 'react-toastify';

import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

interface InputProps {
  email?: string;
  errors?: FieldError;
}

interface IDataProps {
  contact: {
    email: string;
  };
}

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { english, setEnglish }: any = useTranslate();
  function translateMode() {
    setEnglish(!english);
  }

  function toastSucess() {
    toast.success('Sucesso! Obrigado pelo contato.', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  function tostFailure() {
    toast.error('Este email já está cadastrado!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  const formSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório.').email('Email inválido.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const headers = {
    method: 'POST',
    'Content-Type': 'application/json',
  };

  const onSubmit: SubmitHandler<InputProps> = async (data) => {
    const dataFormatted = JSON.stringify({
      contact: {
        email: data.email,
      },
    });

    try {
      setLoading(true);
      console.log(dataFormatted);

      await fetch('/api/getUsers', {
        method: 'POST',
        headers,
        body: dataFormatted,
      })
        .then((response) => response.json())
        .then(toastSucess)
        .catch((error) => {
          console.log(error);
          tostFailure();
        });
      setLoading(false);
    } catch (err) {
      console.log(err);
      tostFailure();
    }
  };

  console.log(errors);

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
        pt={['3rem', '3rem', 0]}
        pb={['1rem', '1rem', 0]}
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
                  <HStack mt="0.2rem" spacing={5}>
                    <Box mb="0.5rem">
                      <IconBitsWhite />
                    </Box>
                    {/* <Divider
                      border="1px"
                      borderColor="white"
                      pt="1.2rem"
                      mt="0.2rem"
                      height="5px"
                      orientation="vertical"
                    />
                    <Menu>
                      <>
                        <MenuButton
                          py={2}
                          as="button"
                          transition="all 0.4s"
                          _hover={{ border: 'none' }}
                          _active={{ border: 'none' }}
                          _expanded={{ bg: 'transparent' }}
                          _focus={{}}
                          bgColor="transparent"
                          border="none"
                          sx={{
                            color: 'white',
                          }}
                        >
                          {english === false ? (
                            <Text as="span" color="white">
                              PT
                            </Text>
                          ) : (
                            <Text as="span" color="white">
                              EN
                            </Text>
                          )}{' '}
                          <ChevronDownIcon color="white" />
                        </MenuButton>
                        <MenuList
                          p={0}
                          display={'flex'}
                          minW="0"
                          flexDir="column"
                          w={'130px'}
                          bgColor="#fff"
                          mr="1.9rem"
                        >
                          <MenuItem
                            onClick={translateMode}
                            _hover={{
                              color: 'purple.500',
                              fontWeight: 'regular',
                              transition: 'all ease 0.1s',
                            }}
                          >
                            {english === false ? 'Inglês' : 'Português'}
                          </MenuItem>
                        </MenuList>
                      </>
                    </Menu> */}
                  </HStack>

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
                  <List spacing={2} color="white">
                    <ListItem fontFamily="Roboto" fontWeight="700" mb="1rem">
                      Serviços
                    </ListItem>
                    <Divider
                      width="160px"
                      border="1px"
                      borderColor="white"
                      orientation="horizontal"
                    ></Divider>
                    <NextLink
                      href="https://blog.bitsacademy.com.br/marketing-digital"
                      passHref
                    >
                      <ListItem cursor="pointer">Marketing Digital</ListItem>
                    </NextLink>
                    <NextLink
                      href="https://blog.bitsacademy.com.br/vendas"
                      passHref
                    >
                      <ListItem cursor="pointer">Vendas</ListItem>
                    </NextLink>
                    <NextLink
                      href="https://blog.bitsacademy.com.br/legal-design"
                      passHref
                    >
                      <ListItem cursor="pointer">Legal Design</ListItem>
                    </NextLink>
                    <NextLink
                      href="https://blog.bitsacademy.com.br/treinamentos"
                      passHref
                    >
                      <ListItem cursor="pointer">Treinamentos</ListItem>
                    </NextLink>
                    <NextLink
                      href="https://blog.bitsacademy.com.br/cursos"
                      passHref
                    >
                      <ListItem cursor="pointer">Cursos</ListItem>
                    </NextLink>
                    <NextLink href="https://blog.bitsacademy.com.br/" passHref>
                      <ListItem cursor="pointer">Blog</ListItem>
                    </NextLink>
                  </List>
                </Flex>
                <GridItem mt="0.5rem">
                  <List spacing={2} color="white">
                    <ListItem mb="0.9rem" fontFamily="Roboto" fontWeight="700">
                      Outros
                    </ListItem>
                    <Divider
                      width="160px"
                      border="1px"
                      borderColor="white"
                      orientation="horizontal"
                    ></Divider>
                    <NextLink
                      href="https://blog.bitsacademy.com.br/material-rico"
                      passHref
                    >
                      <ListItem cursor="pointer">Materiais Gratuitos</ListItem>
                    </NextLink>
                    <NextLink
                      href="https://blog.bitsacademy.com.br/noticias"
                      passHref
                    >
                      <ListItem cursor="pointer">Notícias</ListItem>
                    </NextLink>

                    <NextLink
                      href="https://blog.bitsacademy.com.br/casos-de-sucesso/"
                      passHref
                    >
                      <ListItem cursor="pointer">Casos de sucesso</ListItem>
                    </NextLink>

                    <NextLink
                      href="https://blog.bitsacademy.com.br/politica-de-privacidade/"
                      passHref
                    >
                      <ListItem cursor="pointer">
                        Política de privacidade
                      </ListItem>
                    </NextLink>
                  </List>
                </GridItem>
                <GridItem>
                  <Flex
                    mt="2rem"
                    as="form"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                    flexDir="column"
                  >
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
                      type="email"
                      label="Seu email"
                      {...register('email')}
                      error={errors.email}
                    />

                    <Button
                      mb="1rem"
                      color="#fff"
                      h="45px"
                      mt="0.2rem"
                      transition="bgGradient ease-in 200ms"
                      bgGradient="linear(to-t, #793399, #4B2076)"
                      type="submit"
                      _hover={{
                        bgGradient: 'linear(to-t, #9f47c7, #6f38a7)',
                      }}
                      _active={{ border: 'none', borderColor: 'transparent' }}
                      _focus={{
                        border: 'none',
                        borderColor: 'transparent',
                      }}
                      boxShadow="2xl"
                    >
                      {loading ? <Spinner /> : 'Enviar'}
                    </Button>
                  </Flex>

                  <Flex mt="1rem" maxW="100px" w="100%" justify="space-between">
                    <NextLink
                      href="https://www.instagram.com/bitsacademy/"
                      passHref
                    >
                      <a target="_blank">
                        <Flex cursor="pointer">
                          {' '}
                          <IconInstagram />
                        </Flex>
                      </a>
                    </NextLink>
                    <NextLink
                      href="https://www.facebook.com/BITS-Academy-101187194799339/"
                      passHref
                    >
                      <a target="_blank">
                        <Flex cursor="pointer">
                          <IconFacebook />
                        </Flex>
                      </a>
                    </NextLink>

                    <NextLink
                      href="https://www.linkedin.com/company/bitsacademy"
                      passHref
                    >
                      <a target="_blank">
                        <Flex>
                          {' '}
                          <IconLinkedin />
                        </Flex>
                      </a>
                    </NextLink>
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
            <HStack mb="1.5rem" mt="0.2rem" spacing={5}>
              <Box mb="0.5rem">
                <IconBitsWhite />
              </Box>

              {/*  <Divider
                border="1px"
                borderColor="white"
                pt="1.2rem"
                mt="0.2rem"
                height="5px"
                orientation="vertical"
              /> <Menu>
                <>
                  <MenuButton
                    py={2}
                    as="button"
                    transition="all 0.4s"
                    _hover={{ border: 'none' }}
                    _active={{ border: 'none' }}
                    _expanded={{ bg: 'transparent' }}
                    _focus={{}}
                    bgColor="transparent"
                    border="none"
                    sx={{
                      color: 'white',
                    }}
                  >
                    {english === false ? (
                      <Text as="span" color="white">
                        PT
                      </Text>
                    ) : (
                      <Text as="span" color="white">
                        EN
                      </Text>
                    )}{' '}
                    <ChevronDownIcon color="white" />
                  </MenuButton>
                  <MenuList
                    p={0}
                    display={'flex'}
                    minW="0"
                    flexDir="column"
                    w={'130px'}
                    bgColor="#fff"
                    mr="1.9rem"
                  >
                    <MenuItem
                      onClick={translateMode}
                      _hover={{
                        color: 'white',
                        bgColor: 'purple.500',
                        borderRadius: '5px',
                        transition: 'all linear 0.2s',
                      }}
                    >
                      {english === false ? 'Inglês' : 'Português'}
                    </MenuItem>
                  </MenuList>
                </>
              </Menu> */}
            </HStack>

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
                  border="1px"
                  borderColor="white"
                  orientation="horizontal"
                />
                <List spacing={2} color="white">
                  <NextLink
                    href="https://blog.bitsacademy.com.br/marketing-digital"
                    passHref
                  >
                    <ListItem cursor="pointer">Marketing Digital</ListItem>
                  </NextLink>
                  <NextLink
                    href="https://blog.bitsacademy.com.br/vendas"
                    passHref
                  >
                    <ListItem cursor="pointer">Vendas</ListItem>
                  </NextLink>
                  <NextLink
                    href="https://blog.bitsacademy.com.br/legal-design"
                    passHref
                  >
                    <ListItem cursor="pointer">Legal Design</ListItem>
                  </NextLink>
                  <NextLink
                    href="https://blog.bitsacademy.com.br/treinamentos"
                    passHref
                  >
                    <ListItem cursor="pointer">Treinamentos</ListItem>
                  </NextLink>
                  <NextLink
                    href="https://blog.bitsacademy.com.br/cursos"
                    passHref
                  >
                    <ListItem cursor="pointer">Cursos</ListItem>
                  </NextLink>
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
                  border="1px"
                  borderColor="white"
                  orientation="horizontal"
                />
                <List spacing={2} color="white">
                  <NextLink href="https://blog.bitsacademy.com.br/" passHref>
                    <ListItem cursor="pointer">Blog</ListItem>
                  </NextLink>
                  <NextLink
                    href="https://blog.bitsacademy.com.br/politica-de-privacidade/"
                    passHref
                  >
                    <ListItem cursor="pointer">
                      Política de privacidade
                    </ListItem>
                  </NextLink>
                </List>
              </Flex>
            </Flex>
            <Flex as="form" onSubmit={handleSubmit(onSubmit)} flexDir="column">
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
                {...register('email')}
                type="email"
                label="Seu email"
                error={errors.email}
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
                {loading ? <Spinner /> : 'Enviar'}
              </Button>
            </Flex>
            <Flex
              mt="0.5rem"
              maxW="100px"
              w="100%"
              justifyContent="space-between"
            >
              <NextLink href="https://www.instagram.com/bitsacademy/" passHref>
                <a target="_blank">
                  <Flex cursor="pointer">
                    {' '}
                    <IconInstagram />
                  </Flex>
                </a>
              </NextLink>
              <NextLink
                href="https://www.facebook.com/BITS-Academy-101187194799339/"
                passHref
              >
                <a target="_blank">
                  <Flex cursor="pointer">
                    <IconFacebook />
                  </Flex>
                </a>
              </NextLink>

              <NextLink
                href="https://www.linkedin.com/company/bitsacademy"
                passHref
              >
                <a target="_blank">
                  <Flex>
                    {' '}
                    <IconLinkedin />
                  </Flex>
                </a>
              </NextLink>
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
