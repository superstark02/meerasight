'use client'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';

const list = [
  {
    id: '/',
    value: "Home"
  },
  {
    id: '/about',
    value: "About Us"
  },
  {
    id: '/services',
    value: "Services"
  },
  {
    id: '/blog',
    value: "Blog"
  },
  {
    id: '/events',
    value: "Events"
  },
  {
    id: '/contact',
    value: "Contact US"
  },
]

function AppBar() {

  const pathname = usePathname();
  const value = list.findIndex(l => l.id === pathname);

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}>
          {list.map(data => <Tab key={data.id} label={data.value} />)}
        </Tabs>
      </Box>
    </Box >
  );
}

export default AppBar