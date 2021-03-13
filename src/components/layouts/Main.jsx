import React from 'react'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import ProfileCard from '../sections/ProfileCard'
import SearchInput from '../sections/SearchInput'

const Main = () => {
    return (
        <>
            <Header />
            <SearchInput />
            <ProfileCard />
            <Footer /> 
        </>
    )
}

export default Main