import evaluator from "../services/evaluator";
import { ACTIONS } from "./constants/Constants";

const CoreProcessor = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: `${payload.digit}`,
          overwrite: false,
        };
      }
      if (
        (state.currentOperand === "0" && payload.digit === "0") ||
        (state.currentOperand &&
          state.currentOperand.includes(".") &&
          payload.digit === ".")
      )
        return state;
      if (
        state.currentOperand &&
        state.currentOperand[state.currentOperand.length - 1] === "." &&
        payload.digit === "."
      )
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null) {
        return state;
      }
      if (state.operation && state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.operation && state.currentOperand) {
        return {
          ...state,
          previousOperand: evaluator(state),
          currentOperand: null,
          operation: payload.operation,
        };
      }
      return {
        ...state,
        previousOperand: state.currentOperand,
        currentOperand: null,
        operation: payload.operation,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (
        state.currentOperand &&
        state.currentOperand.length == 1 &&
        state.previousOperand == null
      ) {
        return {};
      }
      if (state.previousOperand && state.currentOperand === "") {
        return {
          ...state,
          currentOperand: state.previousOperand,
          previousOperand: null,
          operation: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.previousOperand == null ||
        state.currentOperand == null ||
        state.operation == null
      )
        return state;
      return {
        ...state,
        currentOperand: evaluator(state),
        previousOperand: null,
        operation: null,
        overwrite: true,
      };
    default:
      return;
  }
};

export default CoreProcessor;
