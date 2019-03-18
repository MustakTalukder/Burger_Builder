import React from 'react'
import classes from './NavigationItems.css'
import NavaigationItem from '../NavigationItems/NavigationItem/NavigaionItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}> 
        <NavaigationItem link="/" active>Burger Builder</NavaigationItem>
        <NavaigationItem link="/" >Checkout</NavaigationItem>
    </ul>
)

export default navigationItems