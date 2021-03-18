import React from 'react'
import {IconButton} from '@chakra-ui/react'

const SearchButton = () => {
    return (
        <>
            <IconButton aria-label="Search database" roundedLeft={0}
                icon={<img alt="Searcher Icon" src="https://icongr.am/feather/search.svg?size=24&color=white" />}/>
        </>
    )
}

export default SearchButton