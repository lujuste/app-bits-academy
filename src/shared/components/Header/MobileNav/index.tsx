import Link from 'next/link';
import { Text, VStack } from '@chakra-ui/react';

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
          <Link passHref href={index.url}>
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
          </Link>
        ))}
      </VStack>
    </>
  );
}
