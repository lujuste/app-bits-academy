import { useBreakpointValue, Text, Button } from '@chakra-ui/react';
import { useTranslate } from '../../contexts/Translate';
import NextLink from 'next/link';

interface IFreeTestYourCompanyDigitalProps {
  title?: string;
  description?: string;
}

export default function FreeTestYourCompanyDigital({
  title,
  description,
}: IFreeTestYourCompanyDigitalProps) {
  const { t }: any = useTranslate();

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  return (
    <>
      {isWideVersion ? null : (
        <>
          <Text
            fontStyle="Baloo 2"
            color="white"
            fontSize="1.15rem"
            fontWeight="400"
            fontFamily="Roboto"
          >
            {t.header1}
          </Text>

          <NextLink href="https://bitsacademy.typeform.com/to/xLZQ5s" passHref>
            <Button
              mt="1rem"
              mx="auto"
              boxShadow="2xl"
              w="260px"
              h="62px"
              borderRadius="12px"
              bgGradient="linear(to-r, #DFDFDF, #FFF)"
              fontFamily="Roboto"
              fontSize="1.1rem"
              color="purple.500"
              fontWeight="700"
            >
              {t.btnheader}
            </Button>
          </NextLink>
        </>
      )}
    </>
  );
}
