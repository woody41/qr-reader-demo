// SPDX-License-Identifier: MIT
// Copyright (c) 2020 Daimler TSS GmbH

import * as React from 'react';
import { useI18n } from '@daimler/ftk-core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  pageContainer: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    flexBasis: 0,
    flexShrink: 1,
    flexDirection: 'column',
    padding: 0,
    maxWidth: '100%',
  },
}));

const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  function LayoutComponent(props?: P) {
    const i18n = useI18n();
    const classes = useStyles(props);


    return (
        <div className={classes.pageContainer}>
          <h1>{i18n.translateToString('PageTitle')}</h1>
          {/*@ts-ignore*/}
          <WrappedComponent {...props} />
          <div id="selenium_render_check" style={{ display: 'none' }} />
        </div>
    );
  }

  return LayoutComponent;
};

export default withLayout;
