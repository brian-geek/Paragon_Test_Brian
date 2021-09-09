import React from 'react';
// Material UI Imports
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const muiStyles = () => ({
  container: {
    background: '#fff',
    height: '250px',
    border: '1px solid #e0d5f6',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    background: '#a279f9',
    padding: '0 20px',
    color: '#fff',
    fontWeight: 500,
    fontSize: '16px',
  },
  resultBox: {
    padding: '10px 20px',
    color: '#00cc44',
  },
  checkIcon: {
    color: '#00cc44',
    margin: '0 5px',
  },
  failedIcon: {
    color: '#ff0000',
    margin: '0 5px',
  },
});

const ResultBox = ({ classes, result, resultCode, isFunctionPanel }) => {
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} container justify="space-between" className={classes.header}>
        <Grid item container xs={6}>
          {isFunctionPanel ? (
            <Typography>Function</Typography>
          ) : (
            <>
              {resultCode === 1 ? (
                <CheckCircleIcon className={classes.checkIcon} />
              ) : resultCode === 2 ? (
                <CancelIcon className={classes.failedIcon} />
              ) : (
                <></>
              )}
              <Typography>
                {resultCode === 1
                  ? 'Function ran successfully'
                  : resultCode === 2
                  ? 'Failed'
                  : 'Please run the function'}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.resultBox}>
        {result}
      </Grid>
    </Grid>
  );
};

export default withStyles(muiStyles)(ResultBox);
