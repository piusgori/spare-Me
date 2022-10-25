import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Home, PostAdd, Sell } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';

export default function BottomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Tabs centered sx={{ width: '100%', position: 'fixed', zIndex: '99', bottom: 0, left: 0, backgroundColor: 'white' }} value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<Home></Home>} label="HOME" />
      <Tab icon={<Sell></Sell>} label="SELL SPARE" />
      {!matches && <Tab icon={<PostAdd></PostAdd>} label="SPARE SHOP" />}
      {!matches && <Tab icon={<PostAdd></PostAdd>} label="GARAGE" />}
      {!matches && <Tab icon={<PostAdd></PostAdd>} label="SPARE SERVICES" />}
    </Tabs>
  );
}