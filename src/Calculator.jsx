import React, { useReducer } from "react";
import CoreProcessor from "./app/CoreProcessor";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { ACTIONS } from "./app/constants/Constants";
import formatter from "./services/formatter";

const Calculator = () => {
  // Variable Initializations
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    CoreProcessor,
    {}
  );

  // Rendering
  return (
    <>
      <div className="label poppins-bold">
        <h4>
          BASIC <span className="highlighted">CALCULATOR</span>
        </h4>
      </div>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand poppins-regular">
            {formatter(previousOperand)} {operation}
          </div>
          <div className="current-operand poppins-bold">
            {formatter(currentOperand)}
          </div>
        </div>
        <button
          className="span-two"
          onClick={() => {
            dispatch({ type: ACTIONS.CLEAR });
          }}
        >
          AC
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_DIGIT });
          }}
        >
          DEL
        </button>
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="x" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button
          className="span-two"
          onClick={() => {
            dispatch({ type: ACTIONS.EVALUATE });
          }}
        >
          =
        </button>
      </div>
    </>
  );
};

export default Calculator;
