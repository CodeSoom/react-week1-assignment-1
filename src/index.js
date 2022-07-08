/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
import { appRender, createElement } from './module';

function render(val = 0) {
  const data = val;

  const setFixedNumber = (e) => {
    render(data + Number(e.target.value));
  };

  const setIncreaseNumber = () => {
    render(data + 1);
  };

  const element = (
    <p>
      <button type="button" onClick={setIncreaseNumber}>
        Click me!
        {` (${data})`}
      </button>
      <div>
        {[1, 2, 3].map((num) => (
          <button type="button" onClick={setFixedNumber} value={num}>
            {num}
          </button>
        ))}
      </div>
    </p>
  );

  appRender(element);
}

render();
