import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

const Header = () => (
  <header>
    <Box height="65px" bg="#2C2C2C" className="flex items-center px-6">
      <Text lineHeight="34px" fontSize="28px" className="text-white">
        Flick App
      </Text>
    </Box>
  </header>
);

export default Header;