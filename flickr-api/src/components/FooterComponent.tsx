import React from 'react';
import {
  Box,
  Container,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

interface FooterProps {
    footerText: string;
  }
const Footer: React.FC<FooterProps> = (props) => (
  <Box
    bg="#0B868B"
    color={useColorModeValue('gray.700', 'gray.200')}
  >
    <Center height="65px">
      <Text color="#fff" style={{ fontSize: '18px' }}>{props.footerText}</Text>
    </Center>
  </Box>
);
export default Footer;
