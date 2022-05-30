/* eslint-disable no-param-reassign */
import { toast } from 'react-toastify';

const excludeRoutes = [];

/**
 * Middleware For Axios Instance
 * @param {AxiosInstance} axiosInstance - axios instance
 */
export const requestMiddleWare = (axiosInstance) => {
  const requestConfiguration = (config) => {
    // don't append token for this routes
    if (!excludeRoutes.includes(config.url)) {
      return {
        ...config,
        headers: {
          ...config.headers,
        },
      };
    }
    return config;
  };

  const responseErrorHandler = (error) => {
    if (!error.response) {
      error.response = {};
    }

    switch (error.code) {
      case 'ECONNABORTED':
        error.response = {};
        break;
      default:
        break;
    }

    toast.error(
      error?.response?.message || error?.response?.statusText || error?.response?.status || 'something went wrong!',
      {
        position: 'bottom-left',
      }
    );
    return Promise.reject(error);
  };

  axiosInstance.interceptors.request.use(requestConfiguration, (error) =>
    // Do something with request error
    Promise.reject(error)
  );

  axiosInstance.interceptors.response.use((response) => response, responseErrorHandler);
};
