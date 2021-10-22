import { Button } from '@chakra-ui/button';
import { Img } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react';

const ImgBox = props => (
	<Box px="25px" py="25px" width="336px">
		<Box 
			className="bg-white" 
			boxShadow="0px 10px 14px rgba(0, 0, 0, 0.08)" 
			borderRadius="3px">
			<Img 
				objectFit="cover" 
				width="286px" 
				height="154px" 
				borderTopRadius="3px"
				alt=""
				src={props.url} />
			<Box px="27px" py="20px" className="flex flex-col">
				<Text 
					lineHeight="34px" 
					fontSize="28px" 
					color="#000000" 
					noOfLines="1">
					{props.data.title}
				</Text>
				<Button 
					colorScheme="flick-grey" 
					color="#0B868B" 
					className="text-base mt-5">
					Explore
					<ArrowRightIcon className="w-4 h-4 ml-1" />
				</Button>
			</Box>
		</Box>
	</Box>
);

export default ImgBox;