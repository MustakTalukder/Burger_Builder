import React from 'react'
import classes from './NavigationItems.css'
import NavaigationItem from '../NavigationItems/NavigationItem/NavigaionItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}> 
        <NavaigationItem link="/" exact>Burger Builder</NavaigationItem>
        <NavaigationItem link="/orders" >Orders</NavaigationItem>
    </ul>
)

export default navigationItems