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
