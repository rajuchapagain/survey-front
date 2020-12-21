export const initialState = {
  surveys: [],
  activeSurvey: null,
};

// Selector
//export const getCurrentSurveyInfo = (id) => surveys.filter((p) => (p.id = id));

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT_SURVEY":
      return {
        ...state,
        surveys: action.surveys,
      };
    case "SET_CURRENT_SURVEY":
      return {
        ...state,
        activeSurvey: action.activeSurvey,
      };

    case "EMPTY_STORE":
      return {
        ...state,
        surveys: [],
      };

    default:
      return state;
  }
};

export default reducer;
