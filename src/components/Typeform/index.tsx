import { Flex } from '@chakra-ui/react';
import { Widget, Popover } from '@typeform/embed-react';

export default function Typeform() {
  return (
    <Flex
      overflow="hidden"
      py="1rem"
      mt="-4rem"
      mx="auto"
      border="0"
      maxW="100%"
      h="auto"
      borderRadius="0"
      backgroundClip="content-box, padding-box"
    >
      <script src="//embed.typeform.com/next/embed.js"></script>
      <Widget
        id="KVMIdCRx"
        style={{
          width: '100% !important',
          minHeight: '720px',
          zIndex: '900 !important',
          overflowY: 'hidden',
          borderRadius: '0px !important',
          border: '0 !important',
        }}
        className="my-form"
      />
    </Flex>
  );
}
