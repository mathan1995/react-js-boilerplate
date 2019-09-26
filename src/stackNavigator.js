import React, { Component } from 'react'
import MainPage from "./components/Header/index"
import Home from './components/Home/index'



const StackNavigator = () => {
    return (
        <div>
            <MainPage />
            <Home />
        </div>
    )
}

export default StackNavigator;