import * as actionCreators from './actions';
import {updateObject} from './utility';


const initialState = {
  scenario: 0,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.CHANGE_SCENARIO:
      return updateObject(state, {scenario: action.scenarioId});
    default:
      return state;
  }
};

export default reducer;