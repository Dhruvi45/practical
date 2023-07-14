import { User } from "../../utils/commonInterfase";

export const UserAction = (data:User) => {
  return {
    type: 'REGISTER_USER',
    payload: data
  };
};