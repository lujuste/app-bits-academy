import {
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Divider,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Collapse,
} from '@chakra-ui/react';
import IconBitsWhite from '../IconBitsWhite';
import {
  ChevronDownIcon,
  SearchIcon,
  HamburgerIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import NextLink from 'next/link';

import MobileNav from './MobileNav';

import { useSidebarDrawer } from '../../../contexts/SidebarDrawer';
import { useTranslate } from '../../../contexts/Translate';

export default function Header() {
  const { i18n } = useTranslation();

  const { english, setEnglish }: any = useTranslate();
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { isOpen, onOpen, onClose } = useSidebarDrawer();
  const [show, setShow] = useState<any>(false);

  const handleToggle = () => setShow(!show);
  const { t }: any = useTranslate();

  function translateMode() {
    setEnglish(!english);
  }

  useEffect(() => {
    if (english === true) {
      router.push({ pathname, query }, asPath, { locale: 'en-US' });
    }

    if (english === false) {
      router.push({ pathname, query }, asPath, { locale: 'pt-BR' });
    }
  }, [english]);

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
  });

  return (
    <Flex align="center" w="100%" h="128px" mx="auto" bgColor="purple.500">
      <Flex
        px={[10, 10, 20, 20]}
        w="100%"
        maxW="1400px"
        mx="auto"
        align="center"
        position="relative"
      >
        <Flex
          sx={
            isMobile
              ? {
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50% , -50%)',
                  position: 'absolute',
                }
              : {}
          }
        >
          <NextLink href="/" passHref>
            <Flex cursor="pointer">
              <IconBitsWhite />
            </Flex>
          </NextLink>
        </Flex>

        <Flex
          flex="1"
          align="center"
          maxW="626px"
          w="100%"
          justify="space-around"
          ml="auto"
          pl={['3rem', '4rem', '4rem', '5rem', '5rem']}
        >
          {isWideVersion && (
            <>
              <Text
                color="white"
                fontSize="1.1rem"
                fontWeight="400"
                display={'inline-block'}
                fontFamily="Maven Pro"
              >
                {t.header1}
              </Text>
              <NextLink
                href="https://bitsacademy.typeform.com/to/xLZQ5s"
                passHref
              >
                <Button
                  mx="auto"
                  boxShadow="lg"
                  w="250px"
                  h="52px"
                  _active={{ border: 'none', borderColor: 'transparent' }}
                  _focus={{ border: 'none', borderColor: 'transparent' }}
                  bgGradient="linear(to-t, #c7c5c5, #FFF)"
                  fontFamily="Roboto"
                  fontWeigth="700"
                  transition={'ease-in-out'}
                  fontSize="1rem"
                  _hover={{
                    bgGradient: 'linear(to-t, white, white )',
                  }}
                  color="purple.500"
                >
                  {t.btnheader}
                </Button>
              </NextLink>
            </>
          )}
        </Flex>

        {!isMobile && (
          <Flex
            justify="space-between"
            maxW="165px"
            w="100%"
            ml="auto"
            align="center"
          >
            {/* <Menu isOpen={isOpen}>
               <MenuButton
                 py={2}
                 as="button"
                 transition="all 0.4s"
                 _hover={{ border: 'none', borderColor: 'transparent' }}
                 _active={{ border: 'none', borderColor: 'transparent' }}
                 _expanded={{ bg: 'transparent', borderColor: 'transparent' }}
                 _focus={{ border: 'none', borderColor: 'transparent' }}
                 bgColor="transparent"
                 border="none"
                 onMouseEnter={onOpen}
                 onMouseLeave={onClose}
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
                 {isOpen ? (
                   <ChevronUpIcon color="white" />
                 ) : (
                   <ChevronDownIcon color="white" />
                 )}
               </MenuButton>
               <MenuList
                 onMouseEnter={onOpen}
                 onMouseLeave={onClose}
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
             </Menu> */}

            <Center w={1} height="25px">
              <Divider orientation="vertical" />
            </Center>
            <NextLink href="https://blog.bitsacademy.com.br">
              <Text cursor="pointer" color="white">
                Blog
              </Text>
            </NextLink>
            <Center w={1} height="25px">
              <Divider orientation="vertical" />
            </Center>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="options"
                variant="none"
                icon={<HamburgerIcon w={6} h={6} color="white" />}
                _active={{ border: 'none' }}
                _focus={{ border: 'none' }}
              />
              <MenuList
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                bgColor="#fff"
                mr="0.9rem"
              >
                <NextLink href="https://bitsacademy.com.br/noticias/" passHref>
                  <MenuItem
                    _hover={{
                      color: 'purple.500',
                      fontWeight: 'regular',
                      transition: 'all ease 0.1s',
                    }}
                  >
                    {t.menuitem2}
                  </MenuItem>
                </NextLink>

                <NextLink
                  href="https://bitsacademy.com.br/casos-de-sucesso /"
                  passHref
                >
                  <MenuItem
                    _hover={{
                      color: 'purple.500',
                      fontWeight: 'regular',
                      transition: 'all ease 0.1s',
                    }}
                  >
                    {t.menuitem3}
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Flex>
        )}

        {isMobile && (
          <>
            <HamburgerIcon
              cursor="pointer"
              onClick={onOpen}
              w={6}
              h={6}
              color="white"
            />

            <Drawer
              size="full"
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
            >
              <DrawerOverlay>
                <DrawerContent bgGradient="linear(to-t, #000, #4B2076)">
                  <DrawerCloseButton
                    color="white"
                    fontSize="1.25rem"
                    mt="6"
                    zIndex="500000"
                    _focus={{
                      border: 'none',
                    }}
                    _active={{
                      border: 'none',
                    }}
                  />
                  <DrawerHeader mt="7"></DrawerHeader>
                  <DrawerBody zIndex={999999}>
                    <MobileNav />
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        )}
      </Flex>
    </Flex>
  );
}
