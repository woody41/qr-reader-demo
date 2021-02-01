// SPDX-License-Identifier: MIT
// Copyright (c) 2020 Daimler TSS GmbH

import * as React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import {useTranslation} from 'react-i18next'
import i18next from '../../i18n'

const useStyles = makeStyles(({ palette }) => ({
  languageToggle: {
    position: 'relative',

    '& div': {
      display: 'none',
      position: 'absolute',
      top: '0',
      right: '100%',
      whiteSpace: 'nowrap',
      background: palette.grey[700],
      padding: '7px 8px',

      '& p': {
        flexDirection: 'column',
        padding: '0 8px 0 0',
        fontSize: '1rem',
        lineHeight: '1.5',
      },
    },
    '&:hover': {
      background: palette.grey[700],
    },
    '&:hover div': {
      display: 'flex',
    },
  },
  languageLabel: {
    padding: '2px 0 0 5px',
  },
}));

function LanguageSwitch(props: unknown) {
  const classes = useStyles(props);
  const { t } = useTranslation();

  function toggleLanguage() {
    if (i18next?.language === 'de') {
      i18next.changeLanguage('en');
    } else {
      i18next?.changeLanguage('de');
    }
  }

  return (
    <Button
      className={classes.languageToggle}
      color="secondary"
      disableFocusRipple
      onClick={toggleLanguage}
      variant="contained"
    >
      <LanguageIcon />
      <Typography variant="body1" color="inherit" className={classes.languageLabel}>
        {i18next?.language}
      </Typography>
      <div>
        <Typography variant="body2" color="inherit">
          {t('SwitchLanguage')}
        </Typography>
        <CompareArrowsIcon />
      </div>
    </Button>
  );
}

export default LanguageSwitch
