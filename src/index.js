/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
import { appRender, createElement } from './module';
import { setStorage, getStorage } from './store';

function render() {

  const data = getStorage('count');

  const setFixedNumber = (e) => {
    setStorage({key: 'count', value: e.target.textContent });
    render();
  };

  const setIncreaseNumber = () => {
    setStorage({key: 'count', value: Number(data) + 1 });
    render();
  };

  const element = (
    <p>
      <button
        type="button"
        onClick={setIncreaseNumber}
      >
        Click me!
        {` (${data})`}
      </button>
      <div>
        {[1, 2, 3].map((val) => (
          <button
            type="button"
            onClick={setFixedNumber}
          >
            {val}
          </button>
        ))}
      </div>
    </p>
  );

  appRender(element);
}

render();
