import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const muiStyles = () => ({
  layout: {
    display: 'flex',
    backgroundColor: '#f4f6fa',
    minHeight: '100vh',
    padding: '30px 0',
    justifyContent: 'center',
  },
  container: {
    width: '900px',
  },
});

const Layout = ({ children, classes }) => {
  return (
    <div className={classes.layout}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default withStyles(muiStyles)(Layout);
