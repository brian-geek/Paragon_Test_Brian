import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
//redux actions
import { updateWorkNode } from 'redux/actions/workNodeActions';
// Material UI Imports
import { Grid, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MonacoEditor from 'react-monaco-editor';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
//import custom components
import Button from 'components/Button';
import ResultBox from 'components/ResultBox';
//import utils function
import { handleFunctionStrings } from 'utils';

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
  resultPanel: {
    width: '100%',
    background: '#fff',
    height: '400px',
  },
  backBtn: {
    marginLeft: '10px',
  },
});

const EditMode = ({
  classes,
  match: {
    params: { id },
  },
  workNodeLists,
  updateWorkNode,
  history,
}) => {
  const workNodeDetail = workNodeLists.find(workNode => workNode.id === id);
  const navigateToHome = () => {
    history.push('/');
  };
  if (!workNodeDetail) {
    navigateToHome();
  }
  const [runStatus, setRunStatus] = useState(false);
  const [code, setCode] = useState(workNodeDetail?.code);
  const [result, setResult] = useState(workNodeDetail?.result);
  const [resultCode, setResultCode] = useState(workNodeDetail?.resultCode);
  const executeFunc = () => {
    const resultObject = handleFunctionStrings(code);
    setResult(resultObject.result);
    setResultCode(resultObject.resultCode);
    setRunStatus(true);
  };
  const submitFunc = () => {
    const submitResult = {
      ...workNodeDetail,
      code: code,
      result: result,
      resultCode: resultCode,
      updatedAt: new Date(),
    };
    updateWorkNode(submitResult);
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
            Editor Mode
          </Typography>
          <br />
          <Button onClick={executeFunc}>
            <ArrowRightIcon />
            Run Function
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MonacoEditor
                width={'100%'}
                height="500"
                language="javascript"
                value={code}
                onChange={value => {
                  setCode(value);
                }}
                editorDidMount={() => {}}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <ResultBox result={result} resultCode={resultCode} />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={submitFunc} disabled={!runStatus}>
                Submit
              </Button>
              <Button onClick={navigateToHome} className={classes.backBtn}>
                <ArrowLeftIcon />
                Back
              </Button>
            </Grid>
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
  connect(mapStateToProps, { updateWorkNode }),
  withRouter,
  withStyles(muiStyles)
)(EditMode);
