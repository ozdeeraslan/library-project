import React from 'react'
import Navi from './Navi'
import Search from './Search'
import CardList from './CardList'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navi />
            <Outlet/>
            <Search />
            <CardList />
        </>
    )
}

export default Home