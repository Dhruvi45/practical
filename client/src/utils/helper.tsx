import axios from "axios";

const backendBseUrl = "http://localhost:3001"

export const axiosAuth = (reqUrl: string, reqBody: Object) => {
  return new Promise((resolve, reject) => {
    axios
      .post(backendBseUrl+reqUrl, reqBody)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
