import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/auth/local/register';
    return axiosClient.get(url, { data });
  },

  login(data) {
    const url = '/auth/local';
    return axiosClient.get(url, { data });
  }
};

export default userApi;
