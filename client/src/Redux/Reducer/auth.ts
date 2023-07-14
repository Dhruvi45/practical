import { User } from "../../utils/commonInterfase";

const InitialState = {
  user: {},
};

export const UserReducer = (
  state = InitialState,
  action: { type: string; payload: User }
) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};
