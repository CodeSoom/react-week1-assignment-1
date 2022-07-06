export const setStorage = ({ key, value }) => {
  if(!key || !value) {
    throw new Error('키와 값을 정확하게 입력해주세요');
  }

  window.localStorage.setItem(key, value);
}

export const getStorage = (key) => {
  if(!key) {
    throw new Error('키를 정확하게 입력해주세요');
  }

  return window.localStorage.getItem(key) || 0;
}