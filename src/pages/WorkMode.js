import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
//redux actions
import { addWorkNode } from 'redux/actions/workNodeActions';
// Material UI Imports
import { Grid, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ResultBox from 'components/ResultBox';
import Button from 'components/Button';

const muiStyles = () => ({
  paperBox: {
    padding: '10px',
    width: '100%',
  },
  headerBox: {
    marginTop: '20px',
    textAlign: 'center',
    padding: '10px',
  },
  container: {
    width: '100%',
  },
  workNodeContainer: {
    cursor: 'pointer',
    border: '1px solid #e0d5f6',
    boxShadow: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 0 4px 0 #a279f9',
    background: '#fff',
    margin: '20px 0',
  },
});

const WorkMode = ({ classes, history, workNodeLists, addWorkNode }) => {
  const addNewWorkNode = () => {
    const newWorkNode = {
      id: `brian-guzman-${workNodeLists.length + 1}`,
      code: '',
      result: null,
      resultCode: 0,
      createdAt: new Date(),
    };
    addWorkNode(newWorkNode);
  };
  const navigateToEditPage = workNodeId => {
    history.push(`/editor/${workNodeId}`);
  };
  return (
    <div>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" fullWidth>
            Brian Guzman
          </Typography>
          <br />
          <Typography variant="h4" fullWidth>
            Worker Mode
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={addNewWorkNode}>Add New</Button>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {workNodeLists.map((workNode, idx) => (
              <Grid
                item
                xs={12}
                key={`work-node-${idx}`}
                className={classes.workNodeContainer}
                onClick={() => {
                  navigateToEditPage(workNode.id);
                }}
              >
                <Grid container spacing={2} justify="space-between">
                  <Grid item xs={6}>
                    <ResultBox result={workNode.code} isFunctionPanel />
                  </Grid>
                  <Grid item xs={6}>
                    <ResultBox result={workNode.result} resultCode={workNode.resultCode} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  const { workNodes } = state;
  return { workNodeLists: workNodes.workNodes };
};

export default compose(
  connect(mapStateToProps, { addWorkNode }),
  withRouter,
  withStyles(muiStyles)
)(WorkMode);
