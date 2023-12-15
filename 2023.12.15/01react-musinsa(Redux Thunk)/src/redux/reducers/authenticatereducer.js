const initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN _SUCCESS":
      console.log("login_seccess");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
};

export default authenticateReducer;
