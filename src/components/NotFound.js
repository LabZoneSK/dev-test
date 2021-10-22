import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/layout';

const NotFound = () => (
	<Flex className="items-center justify-center w-full h-full">
		<Text className="text-center text-lg">
			Your search did not return any results. Please try again.
		</Text>
	</Flex>
)

export default NotFound;