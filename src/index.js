/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
import { appRender, createElement } from './module';

function render(val = 0) {
  const data = val;

  const handleIncreaseNum = () => {
    render(data + 1);
  };

  const handleAddNum = (e) => {
    render(data + Number(e.target.value));
  };

  const element = (
    <p>
      <button type="button" onClick={handleIncreaseNum}>
        Click me!
        {` (${data})`}
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

render();
