import React from 'react'
import {Box, Text} from '@chakra-ui/react'

const Header = () => {
    return (
        <Box flexDirection="row" textAlign="center" letterSpacing="wide" margin={3} padding={3}>
            <Text fontSize="50px" color="green.200">Welcome to GitHub Finder</Text>
            <Text fontSize="20px" 
                fontStyle="italic" 
                marginTop={4}
                color="green.200">With this app you can find profiles just by knowing the user. Using the GitHub API to get the profile information.</Text>
        </Box>
    )
}

export default Header