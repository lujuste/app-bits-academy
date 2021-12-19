import { useBreakpointValue, Text, Button } from '@chakra-ui/react';

interface IFreeTestYourCompanyDigitalProps {
  title?: string;
  description?: string;
}

export default function FreeTestYourCompanyDigital({
  title,
  description,
}: IFreeTestYourCompanyDigitalProps) {
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
            mt={['2rem', '3rem', '3rem', '-6rem', '0rem']}
          >
            Sua empresa já é digital?
          </Text>
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
            Clique aqui para descobrir
          </Button>
        </>
      )}
    </>
  );
}
