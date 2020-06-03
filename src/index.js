/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
const { log } = console;

// eslint-disable-next-line no-unused-vars
const createElement = (tagName, props, ...children) => {
  const element = document.createElement(tagName);
  const propEntries = Object.entries(props || {});
  const childNodes = [...children].flat().map((child) => {
    if (child instanceof Node) {
      return child;
    }
    return document.createTextNode(child);
  });

  [...propEntries].forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
  [...childNodes].forEach((node) => element.appendChild(node));
  return element;
};

const ViewModel = () => {
  const TAG = '[ViewModel]';
  const observers = new Set();

  return {
    addObserver(observer) {
      log(TAG, 'addObserver()');
      observers.add(observer);
    },
    notifyObservers(value) {
      log(TAG, 'notifyObservers()');
      observers.forEach((observer) => observer.onNotify(value));
    },
  };
};

const View = () => {
  const TAG = '[View]';

  return {
    onNotify() {
      log(TAG, 'onNotify()');
    },
  };
};

const Counter = () => {
  const TAG = '[Counter]';
  const value = {
    count: 0,
  };

  return {
    increase() {
      log(TAG, 'incrase()');
      value.count += 1;
    },
    setCount(newCount) {
      log(TAG, 'setCount()');
      value.count = newCount;
    },
    getCount() {
      log(TAG, 'getCount()');
      return value.count;
    },
  };
};

const CounterViewModel = (model) => {
  const TAG = '[CounterViewModel]';
  const viewModel = ViewModel();
  const counter = model;

  const notifyObservers = () => {
    const count = counter.getCount();
    viewModel.notifyObservers(count);
  };

  return {
    ...viewModel,
    onClickMe() {
      log(TAG, 'onClickMe()');
      counter.increase();
      notifyObservers();
    },
    onClickNumber(number) {
      log(TAG, 'onClickNumber()');
      counter.setCount(number);
      notifyObservers();
    },
    init() {
      notifyObservers();
    },
  };
};

const CounterView = (viewModel) => {
  const TAG = '[CounterView]';

  const render = (count, onClickMe, onClickNumber) => {
    const element = (
      <div id="hello-world" className="greeting">
        <p>Hello World!</p>
        <div>
          <button type="button" onClick={onClickMe}>
            Click me! (
            {count}
            )
          </button>
        </div>
        <div>
          {[1, 2, 3].map((i) => (
            <button type="button" onClick={() => onClickNumber(i)}>
              {i}
            </button>
          ))}
        </div>
      </div>
    );

    const container = document.getElementById('app');
    container.textContent = '';
    container.appendChild(element);
  };

  return {
    ...View(),
    onNotify(value) {
      log(TAG, 'onNotify()');
      render(value, viewModel.onClickMe, viewModel.onClickNumber);
    },
  };
};

const counter = Counter();
const counterViewModel = CounterViewModel(counter);
const counterView = CounterView(counterViewModel);

counterViewModel.addObserver(counterView);
counterViewModel.init();
