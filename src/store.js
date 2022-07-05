export const store = {
  count: 0,
};

export const setStore = (state) => {
  const isObject = state && Object.getPrototypeOf(state) === Object.prototype;
  if (!isObject) {
    throw new Error('데이터 타입은 객체형태로 입력해주세요.');
  }

  Object.keys(state).forEach((key) => {
    store[key] = state[key];
  });
};
