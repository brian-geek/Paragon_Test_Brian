const initialState = {
  workNodes: [],
};
// Home Page's Reducer
export default function workNodeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADDNEWWORKNODE':
      return {
        ...state,
        workNodes: [...state.workNodes, action.payload],
      };

    case 'UPDATEWORKNODE':
      let workNodeList = state.workNodes;
      workNodeList[
        workNodeList.indexOf(workNodeList.find(workNode => workNode.id === action.payload.id))
      ] = action.payload;
      return {
        ...state,
        workNodes: workNodeList,
      };

    default:
      return { ...state };
  }
}
