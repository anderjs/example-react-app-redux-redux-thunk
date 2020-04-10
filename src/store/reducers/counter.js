import * as event from "../actions/types";
import { applyFilter, applySumOverCounters, deleteItemFromCounter } from "utils";

const initialState = {
  counters: [{
    count: 0,
    id: "x1x1",
    title: "Jorge"
  }, {
    count: 2,
    id: "x2x2",
    title: "Anderson"
  }],
  errors: {
    onDelete: null,
    onCreate: null
  },
  loading: {
    onDelete: false,
    onCreate: false
  },
  total: 0
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
          onCreate: true,
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

    case event.ON_APPLY_FILTER:
      return {
        ...state,
        counters: applyFilter(state.counters, action.payload)
      }

    case event.ON_SUM_COUNTERS:
      return {
        ...state,
        total: applySumOverCounters(state.counters)
      }

    case event.ON_DELETE_COUNTER:
      return {
        ...state,
        counters: deleteItemFromCounter(state.counters, action.payload)
      }

    default:
      return state;
  }
}

export default counterReducer;
