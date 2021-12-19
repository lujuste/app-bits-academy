import { Button, ButtonProps } from '@chakra-ui/react';

import Link from 'next/link';

interface HomeButtonProps extends ButtonProps {
  colorOne: string;
  colorTwo: string;
  text: string;
  shadow: string;
  textColor: string;
  href: string;
}

export default function HomeButton({
  colorOne,
  colorTwo,
  text,
  shadow,
  textColor,
  href,
  ...rest
}: HomeButtonProps) {
  return (
    <Link href={href} passHref>
      <Button
        bgGradient={`linear(to-t, ${colorOne}, ${colorTwo})`}
        w="100%"
        maxW="600px"
        h="100px"
        mx="3px"
        boxShadow={shadow}
        fontSize="1.25rem"
        color={textColor}
        {...rest}
      >
        {text}
      </Button>
    </Link>
  );
}
