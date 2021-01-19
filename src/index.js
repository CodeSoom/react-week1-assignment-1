/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
/* @jsx createElement */
const createElement = (tagName, props, ...children) => {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
};
const countChange = {
  state: {
    count: 0,
    setState(key, value) {
      const oldState = countChange.state;
      if (oldState[key] === value) {
        return;
      }

      countChange.state[key] = value;
      countChange.methods.render();
    },
  },
  methods: {
    handleClick() {
      const newCount = countChange.state.count + 1;
      countChange.state.setState('count', newCount);
    },
    handleClickNumber(value) {
      countChange.state.setState('count', value);
    },
    render() {
      const { count } = countChange.state;
      const { handleClick, handleClickNumber } = countChange.methods;
      const element = (
        <div id="hello" className="gree">
          <p>헬로월드</p>
          <p>
            <button type="button" onClick={handleClick}>
              Click me! ({count})
            </button>
          </p>
          <p>
            {[1, 2, 3].map((i) => (
              <button type="button" onClick={() => handleClickNumber(i)}>
                {i}
              </button>
            ))}
          </p>
        </div>
      );
      document.getElementById('app').textContent = '';
      document.getElementById('app').appendChild(element);
    },
  },
};

countChange.methods.render();
