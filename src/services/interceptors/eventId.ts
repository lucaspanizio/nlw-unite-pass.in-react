import { InternalAxiosRequestConfig } from 'axios';

export const eventIdInterceptor = async (
  config: InternalAxiosRequestConfig,
) => {
  try {
    const eventId = '9e9bd979-9d10-4915-b339-3786b1634f33';
    const replaceURL = config.url?.replace('/:eventId', `/${eventId}`);
    config.url = replaceURL;
  } catch (error) {
    console.log('Error\n', error);
  }
  return config;
};
