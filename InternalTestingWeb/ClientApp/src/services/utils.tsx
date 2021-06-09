import Cookies from 'js-cookie';

export const getInfoUser = () => {
  return JSON.parse(Cookies.get('info_user') || '');
};

export const checkStatus = (res: any) => {
  if (res.ok) {
    return res;
  }
  return res.json().then((res: any) => {
    return new Error(res.message);
  });
};

export const saveTestCase = (testCase) => {
  localStorageHandler(testCase);
};

export const getTestCases = () => {
  const key = 'test-cases';
  const currentState = localStorage.getItem(key);
  let currentTestCases;
  if (!!currentState) {
    currentTestCases = JSON.parse(currentState);
  } else {
    currentTestCases = [];
  }
  return currentTestCases;
};

export const localStorageHandler = (value) => {
  const key = 'test-cases';
  const currentTestCases = getTestCases();
  currentTestCases.push(value);
  localStorage.setItem(key, JSON.stringify(currentTestCases));
};