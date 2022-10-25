import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeDrawer from '../../components/HomeDrawer';
import TopBar from '../../components/TopBar';
import Categories from './home-components/Categories';
import classes from './HomePage.module.css';
import { useWindowScroll } from 'react-use';
import BottomTabs from '../../components/BottomTabs';

const HomePage = () => {

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const { y } = useWindowScroll();
  
    useEffect(() => {
      if(y >= 100) setIsTop(false);
      if(y < 100) setIsTop(true); 
    }, [y])
  
  return (
    <>
        <TopBar isTop={isTop}></TopBar>
        <HomeDrawer></HomeDrawer>
        <div className={classes.top}>
          <div className={classes.centered}>
            <div className={classes.content}>
              <Typography variant='h2' sx={{ color: 'white', fontWeight: '100', fontFamily: "'Cormorant Garamond', serif", textAlign: 'center', mb: 2 }}>MY SPARES</Typography>
              <p className={classes.text}>ALL THE SPARES YOU WANT AVAILABLE HERE</p>
              <Button variant={isButtonHovered ? 'contained' : 'outlined'} color='inherit' sx={{ color: isButtonHovered ? 'black' : 'white', mt: 2 }} onMouseEnter={() => setIsButtonHovered(true)} onMouseLeave={() => setIsButtonHovered(false)}>Get Started</Button>
            </div>
          </div>
        </div>
        <Categories></Categories>
        <BottomTabs></BottomTabs>
    </>
  )
}

export default HomePage;