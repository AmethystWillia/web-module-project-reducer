import React, { useReducer } from 'react';

import reducer, { initialState } from '../reducers';
import { 
  addOne, applyNumber, changeOperator, clearDisplay,
  memAdd
 } from '../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddOne = () => {
    dispatch(addOne());
  };

  const handleApplyNum = (num) => {
    dispatch(applyNumber(num.target.value));
  };

  const handleChangeOp = (operator) => {
    dispatch(changeOperator(operator.target.value));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  // --------
  const handleMemAdd = () => {
    dispatch(memAdd());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleMemAdd} value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNum} value={1}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleChangeOp} value={"+"}/>
              <CalcButton onClick={handleChangeOp} value={"*"}/>
              <CalcButton onClick={handleChangeOp} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
