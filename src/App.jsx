import PropTypes from 'prop-types';
import { useState } from 'react';

export const App = (props) => {
  const { value } = props;

  const [counter, setCounter] = useState(value);
  const colorValueCounter = counter >= 0 ? 'positive' : 'negative';

  const handleAdd = () => setCounter(counter + 1);
  const handleReset = () => setCounter(value);
  const handleSubstract = () => setCounter(counter - 1);

  return (
    <>
      <h1>Counter App </h1>
      <p>
        Valor del Contador: <span className={colorValueCounter}>{counter}</span>
      </p>
      <div className="botonWrap">
        <button onClick={handleAdd}>Suma 1</button>
        <button onClick={handleReset}>Resetear</button>
        <button onClick={handleSubstract}>Resta 1</button>
      </div>
    </>
  );
};

App.propTypes = {
  value: PropTypes.number.isRequired,
};
