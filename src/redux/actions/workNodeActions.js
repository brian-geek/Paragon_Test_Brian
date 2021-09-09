//add work node action
export const addWorkNode = workNode => dispatch => {
  dispatch({ type: 'ADDNEWWORKNODE', payload: workNode });
};

export const updateWorkNode = workNode => dispatch => {
  dispatch({ type: 'UPDATEWORKNODE', payload: workNode });
};
