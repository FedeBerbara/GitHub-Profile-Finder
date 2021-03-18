import React from 'react'
import {Stack, Box, Avatar, Text} from '@chakra-ui/react'

const ProfileCard = () => {
    return (
        <Stack direction={['column', 'row']} 
            width="80%" 
            alignSelf="center" 
            padding={9} 
            margin={9} 
            borderRadius="xl"
            spacing={['10', '180']} 
            justifyContent="center" 
            backgroundColor="#333333">
                <Box as="div" direction="row">
                    <Avatar size="xxl"/>
                </Box>
                <Box as="div" direction="row" letterSpacing={1}>
                    <Text fontSize="20px" color="#fff">Name: </Text>
                    <Text fontSize="20px" color="#fff">Location: </Text>
                    <Text fontSize="20px" color="#fff">Bio: </Text>
                </Box>
        </Stack>
    )
}

export default ProfileCard