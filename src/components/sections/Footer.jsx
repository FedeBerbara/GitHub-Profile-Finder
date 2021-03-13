import React from 'react'
import {Box, Text, Link} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box flexDirection="row" textAlign="center" letterSpacing="wide" margin={4} padding={3}>
            <Text fontSize="14px"
                letterSpacing={2} fontStyle="oblique" color="green.200">
                    Developed by <Link href="https://www.linkedin.com/in/federicoberbara/" isExternal>Federico Berbara</Link> - 2021
                </Text>
        </Box>
    )
}

export default Footer