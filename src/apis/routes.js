import recyclePayRequest from 'apis/index';

const auth = {
  /**
   * Login User
   * @param {{email: string, password: string}} data
   * @returns {Promise<AxiosResponse<any>>}
   */
  login: (data) => recyclePayRequest.post('/auth/login/', data),
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
  forgotPassword: (email) => recyclePayRequest.post('/auth/forgot-password', email),
};

const other = {};

const routes = { auth, other };

export default routes;
