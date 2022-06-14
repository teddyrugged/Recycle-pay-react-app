import axios from 'axios';

/**
 *
 * @param {{
 *   baseUrl?: string;
 *   disableActionsOnError?: boolean;
 *   timeout?: number;
 * }} [options]
 */
export const createClient = (options) => {
  const client = axios.create({
    baseURL: options?.baseUrl ?? process.env.REACT_APP_BASE_URL,
    timeout: options?.timeout ?? 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  /**
   *
   * @param {string} token
   */
  const setAuthorizationHeader = (token) => {
    client.defaults.headers.Authorization = `Bearer ${token}`;
  };

  /**
   *
   * @returns {string | undefined }
   */
  const getAuthorizationToken = () => client.defaults.headers.Authorization?.replace('Bearer ', '');

  const removeAuthorizationHeader = () => {
    delete client.defaults.headers.Authorization;
  };

  // Add a response interceptor
  client.interceptors.response.use(
    (response) =>
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      response,
    async (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      let message = error?.response?.data?.message || error?.message || 'Unknown error';

      if (typeof message !== 'string') {
        try {
          message = JSON.stringify(message);
        } catch {
          message = 'Unknown error';
        }
      }

      if (!options || !options.disableActionsOnError) {
        const originalRequest = error.config;
        if (error.response?.status === 401 && originalRequest.url !== 'ENDPOINT_AUTH') {
          // notifications.notifyError(message);
        }
      }
      // await store.dispatch(logout());

      // notifications.notifyError(message, {
      //   persist: [408, 500, 501, 502, 503, 504].includes(
      //     error.response?.status as number
      //   ),
      // });

      return Promise.reject(error);
    }
  );

  return {
    client,
    setAuthorizationHeader,
    removeAuthorizationHeader,
    getAuthorizationToken,
  };
};

export const {
  client: recyclePayRequest,
  setAuthorizationHeader,
  removeAuthorizationHeader,
  getAuthorizationToken,
} = createClient();

export default recyclePayRequest;
