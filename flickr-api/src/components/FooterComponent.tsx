import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

interface FooterProps {
    footerText: string;
  }
const Footer: React.FC<FooterProps> = (props) => (
  <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}
  >
    <Container
      as={Stack}
      maxW="6xl"
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}
    >
      <Text>{props.footerText}</Text>
      <Stack direction="row" spacing={6} />
    </Container>
  </Box>
);
export default Footer;
