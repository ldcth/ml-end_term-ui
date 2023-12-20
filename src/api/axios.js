import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `https://mkhoatd.me`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      //   localStorage.clear();
      //   window.location.href = "/login";
      return;
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const predictTitleTest = (data) =>
  axiosClient
    // .post(`/predict_title?title=${data}`)
    .post(`/predict_title?title=${data}`)

    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

export const predictImage = (formData) =>
  axiosClient
    // .post(`/predict_title?title=${data}`)
    .post(`/predict_image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

export const predictBoth = (title, formData) =>
  axiosClient
    // .post(`/predict_title?title=${data}`)
    .post(`/predict_both?title=${title}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
