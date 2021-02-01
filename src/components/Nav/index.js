import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core';

import QRreaderPage from '../../pages/QRreaderPage/';
import GridPage from '../../pages/GridPage/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from '@daimler/ftk-core'
import {useTranslation} from 'react-i18next'


import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Tab from '@material-ui/core/Tab';

export default function VerticalTabs() {
  const router = useRouter()


  return (
    <div>
        <MenuList>
        <MenuItem onClick={() => router.navigate(router.linkTo('home'))}>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Home</Typography>
        </MenuItem>
        <MenuItem onClick={() => router.navigate(router.linkTo('qr-reader'))}>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">QR Reader test</Typography>
        </MenuItem>
        <MenuItem onClick={() => router.navigate(router.linkTo('grid'))}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">GRID test</Typography>
        </MenuItem>
        <MenuItem onClick={() => router.navigate(router.linkTo('posts'))}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Posts</Typography>
        </MenuItem>
        <MenuItem onClick={() => router.navigate(router.linkTo('forms'))}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Forms</Typography>
        </MenuItem>
      </MenuList>
        
    </div>
  );
}
