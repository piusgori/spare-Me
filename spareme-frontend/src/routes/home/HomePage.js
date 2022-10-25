import React from 'react';
import HomeDrawer from '../../components/HomeDrawer';
import TopBar from '../../components/TopBar';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
        <TopBar></TopBar>
        <HomeDrawer></HomeDrawer>
        <div className={classes.top}></div>
    </>
  )
}

export default HomePage;