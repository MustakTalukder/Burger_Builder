
import React from 'react'

import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'


import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = props => (
    <head className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktoOnly}>
            <NavigationItems/>
        </nav>
    </head>
)

export default toolbar