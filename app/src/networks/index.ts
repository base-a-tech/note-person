/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { log } from 'src/helpers';

export type HeaderOptions = {
  [key: string]: any;
}

export type BodyRequestOptions = {
  [key: string]: any;
} | undefined;

const request = async (url: string, method: string, headers: HeaderOptions, body?: BodyRequestOptions) => {

  let token = await AsyncStorage.getItem('phuot-go-token');

  let configHeader: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${JSON.parse(token)}`,
  };

  const headerKeys = Object.keys(headers);

  const exceptStatus = [422, 409, 200];

  headerKeys.forEach((key) => {
    configHeader[key] = headers[key];
  });

  let status: number = 0;

  return fetch(url, {
    method: method,
    headers: configHeader,
    body: body,
  })
    .then((response) => {
      // console.log("response", response.status);
      status = response.status;
      return response.json();
    })
    .then((json) => {
      if (exceptStatus.includes(status)) {
        if (status === 200)
          {log.success(`${method} : ${url} - STATUS: ${status}`);}
        else
          {log.error(`${method} : ${url} - STATUS: ${status}`);}
        return {
          status: status,
          data: json.data ?? json,
        };
      } else {
        throw json;
      }
    })
    .catch((e) => {
      log.error(`STATUS: FAILED ${e}` );
    });
};

export default request;
