import * as event from "../actions/types";

const initialState = {
  counters: [
    {
      id: "x1x1",
      title: "Jorge",
      count: 0,
    },
    {
      id: "x2x2",
      title: "Anderson",
      count: 2,
    },
  ],
  errors: {
    onCreate: null
  },
  loading: {
    onCreate: false,
  },
};

/**
 * @param {{}} state
 * @param {{ type?: string, payload?: any }} action
 */
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case event.ON_CREATE_COUNTER:
      return {
        ...state,
        counters: [...state.counters, action.payload],
        loading: {
          ...state.loading,
          onCreate: false
        }
      };

    case event.ON_START_CREATE_COUNTER:
      return {
        ...state,
        loading: {
          ...state.loading,
          onCreate: true
        }
      };

    case event.ON_ERROR_CREATE_COUNTER:
      return {
        ...state,
        errors: {
          ...state.errors,
          onCreate: action.payload
        },
        loading: {
          ...state.loading,
          onCreate: false
        }
      }

    default:
      return state;
  }
}

export default counterReducer;
