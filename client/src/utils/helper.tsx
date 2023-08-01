import axios, { AxiosResponse } from "axios";

const backendBseUrl = "http://localhost:3001";

export function axiosAuth<T>(reqUrl: string, reqBody: Object) {
  return new Promise<AxiosResponse<T>>((resolve, reject) => {
    axios
      .post(backendBseUrl + reqUrl, reqBody)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function axiosGet<T>(reqUrl: string) {
  return new Promise<AxiosResponse<T>>((resolve, reject) => {
    axios
      .get(backendBseUrl + reqUrl)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
