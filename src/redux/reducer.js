import Types from "./constants";

const initialState = {
  page: "",
  title: [],
  image: [],
  both: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };

    case Types.PREDICT_TILE:
      const { title, category } = action.payload;
      return {
        ...state,
        title: [...state.title, { title, ...category }],
      };
    case Types.PREDICT_IMAGE:
      const { file, cate } = action.payload;
      return {
        ...state,
        image: [...state.image, { file, ...cate }],
      };
    case Types.PREDICT_BOTH:
      const { title_, file_, category_ } = action.payload;
      return {
        ...state,
        both: [...state.image, { title_, file_, ...category_ }],
      };
    default:
      return state;
  }
};

export default reducer;
