import { uuidv4 } from "uuid";
export const createPost = (content) => {
  return {
    type: "ADD_POST",
    payload: {
      id: uuidv4,
      content,
    },
  };
};
