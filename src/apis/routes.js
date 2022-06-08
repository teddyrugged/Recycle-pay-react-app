import recyclePayRequest from 'apis/index';

const auth = {
  /**
   * Login User
   * @param {{username: string, password: string}} data
   * @returns {Promise<AxiosResponse<any>>}
   */
  login: (data) => recyclePayRequest.post('/auth/login/', data),
  forgetPassword: () => {},
  /**
   * Register User
   * @param {{
   *     email: string,
   *     first_name: string,
   *     last_name: string,
   *     password: string
   * }} data - object to register
   * @returns {Promise<AxiosResponse<{data: {name: string }}>>}
   */
  register: (data) => recyclePayRequest.post('/auth/register/', data),
};

const other = {};

const routes = { auth, other };

export default routes;
