import React, {useState} from 'react'
import {Stack, Input, Image, Box} from '@chakra-ui/react'
import SearchButton from '../ui/SearchButton'
import Logo from '../static/github1.png'
import Swal from 'sweetalert2'

const SearchInput = () => {

    const [profileData, setProfileData] = useState({
        query: ''
    });

    const handelChange = e => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    const fetchData = async (value) => {
        const response = await fetch (`https://api.github.com/user/${value}`);
        const data = await response.json()
        console.log(data);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (profileData.query === '') {
            Swal.fire({
                title: 'Stop!',
                text: 'I will not be able to search the profile if you do not write it',
                icon: 'error',
                timer: 2500,
            });
        } else {
            fetchData(profileData);
            console.log(profileData);
            setProfileData({
                query: ''
            })
        }
    }

    return (
        <>
            <Stack direction="row" spacing={2} padding={4} mb={4} alignSelf="center" backgroundColor="#333333" borderRadius="xl">
                <Image boxSize="39px" src={Logo} />
                <Box as="form" width="100%" alignSelf="center" onSubmit={handleSubmit}>
                    <Stack direction="row" spacing={0} width="100%">
                        <Input name="query" 
                            onChange={handelChange}
                            value={profileData.query} 
                            size="md" 
                            backgroundColor="#fff"
                            focusBorderColor="green.400"
                            placeholder="Enter profile name here" 
                            roundedRight={0}/>
                        <SearchButton />
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}

export default SearchInput;