import { predictBoth, predictImage, predictTitleTest } from "../api/axios";
import Types from "./constants";

const changeOpenPageSuccess = (data) => ({
  type: Types.CHANGE_PAGE,
  payload: {
    page: data,
  },
});
const changeOpenPage = (data) => async (dispatch) => {
  try {
    dispatch(changeOpenPageSuccess(data));
  } catch (error) {
    return Promise.reject(error);
  }
};

//
const predictTitleSuccess = (title, category) => ({
  type: Types.PREDICT_TILE,
  payload: { title: title, category: category },
});

const predictByTitle = (title) => async (dispatch) => {
  try {
    const res = await predictTitleTest(title).then((res) => {
      dispatch(predictTitleSuccess(title, { category: res.data["class:"] }));
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

const predictImageSuccess = (file, category) => ({
  type: Types.PREDICT_IMAGE,
  payload: { file: file, cate: category },
});

const predictByImage = (file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await predictImage(formData).then((res) => {
      dispatch(predictImageSuccess(file, { category: res.data["class:"] }));
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

const predictBothSuccess = (title, file, category) => ({
  type: Types.PREDICT_BOTH,
  payload: { title_: title, file_: file, category_: category },
});

const predictByBoth = (title, file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await predictBoth(title, formData).then((res) => {
      dispatch(
        predictBothSuccess(title, file, { category: res.data["class:"] })
      );
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { changeOpenPage, predictByTitle, predictByImage, predictByBoth };
