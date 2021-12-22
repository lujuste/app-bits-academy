import NextLink from 'next/link';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function MobileNav() {
  const container = {};

  const item = {};

  const menu = [
    {
      page: 'Início',
      url: '/',
    },

    /*
      page: 'Serviços',
      url: '/servicos',*/

    {
      page: 'Notícias',
      url: 'https://blog.bitsacademy.com.br/noticias',
    },
    {
      page: 'Materiais Gratuitos',
      url: 'https://blog.bitsacademy.com.br/material-rico',
    },
    {
      page: 'Casos de sucesso',
      url: 'https://blog.bitsacademy.com.br/casos-de-sucesso',
    },
    {
      page: 'Blog',
      url: 'https://blog.bitsacademy.com.br/',
    },
  ];

  return (
    <>
      <VStack
        display="flex"
        flexDir="column"
        h="100vh"
        w="100%"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        mt="-5rem"
        spacing={'7'}
      >
        {menu.map((index) => (
          <NextLink passHref href={index.url}>
            <Text
              key={index.url}
              color="white"
              fontFamily="Maven Pro"
              fontWeight="bold"
              fontSize="24"
              whileTap={{ scale: 0.9, rotate: 0 }}
            >
              {index.page}
            </Text>
          </NextLink>
        ))}

        {/*  <Accordion
          _active={{ border: 'none', borderColor: 'transparent' }}
          _focus={{ border: 'none', borderColor: 'transparent' }}
          border="none"
          borderColor="transparent"
          allowToggle
        >
          <AccordionItem
            _active={{ border: 'none', borderColor: 'transparent' }}
            _focus={{ border: 'none', borderColor: 'transparent' }}
          >
            <h2>
              <AccordionButton
                _active={{ border: 'none', borderColor: 'transparent' }}
                _focus={{ border: 'none', borderColor: 'transparent' }}
              >
                <Box flex="1" textAlign="left">
                  <Text
                    color="white"
                    fontFamily="Maven Pro"
                    fontWeight="bold"
                    fontSize="24"
                    whileTap={{ scale: 0.9, rotate: 0 }}
                  >
                    Serviços
                  </Text>
                </Box>
                <AccordionIcon color="white" />
              </AccordionButton>
            </h2>
            <NextLink href="https://blog.bitsacademy.com.br/marketing-digital">
              <AccordionPanel color="white" cursor="pointer">
                Marketing Digital
              </AccordionPanel>
            </NextLink>

            <NextLink href="https://blog.bitsacademy.com.br/vendas" passHref>
              <AccordionPanel color="white" mt="-0.2rem" cursor="pointer">
                Vendas
              </AccordionPanel>
            </NextLink>

            <NextLink
              href="https://blog.bitsacademy.com.br/legal-design"
              passHref
            >
              <AccordionPanel color="white" mt="-0.2rem" cursor="pointer">
                Legal Design
              </AccordionPanel>
            </NextLink>

            <NextLink
              href="https://blog.bitsacademy.com.br/treinamentos"
              passHref
            >
              <AccordionPanel color="white" mt="-0.2rem" cursor="pointer">
                Treinamentos
              </AccordionPanel>
            </NextLink>

            <NextLink href="https://blog.bitsacademy.com.br/cursos" passHref>
              <AccordionPanel color="white" mt="-0.2rem" cursor="pointer">
                Cursos
              </AccordionPanel>
            </NextLink>
          </AccordionItem>
        </Accordion> */}
      </VStack>
    </>
  );
}
