/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
import { AppRerender, createElement } from './module';
import { store, setStore } from './store';

function render() {

  const setFixedNumber = () => {
    setStore({ count: val });
    render();
  };

  const setIncreaseNumber = () => {
    setStore({ count: store.count + 1 });
    render();
  };

  const element = (
    <p>
      <button
        type="button"
        onClick={setIncreaseNumber}
      >
        Click me!
        {` (${store.count})`}
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

  AppRerender(element);
}

render();
