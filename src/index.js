/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
import { appRender, createElement } from './module';

function render({ count }) {
  const handleIncreaseNum = () => {
    render({ count: count + 1 });
  };

  const handleAddNum = (e) => {
    render({ count: Number(e.target.value) });
  };

  const element = (
    <p>
      <button type="button" onClick={handleIncreaseNum}>
        Click me!
        {` (${count})`}
      </button>
      <div>
        {[1, 2, 3].map((num) => (
          <button type="button" onClick={handleAddNum} value={num}>
            {num}
          </button>
        ))}
      </div>
    </p>
  );

  appRender(element);
}

render({ count: 0 });
