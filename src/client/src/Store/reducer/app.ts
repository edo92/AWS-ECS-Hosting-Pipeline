interface IState {
  name: string;
  username: string;
  age: string;
}

interface IActoin {
  type: string;
  name?: string;
  username?: string;
  age?: string;
  users: string[];
}

const initialState = {
  name: "Hello World",
  username: "",
  age: "",
  users: [],
};

const user = (state: IState = initialState, action: IActoin) => {
  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        users: action.users,
      };
    }

    case "SET_USERNAME": {
      return {
        ...state,
        username: action.username,
      };
    }

    case "SET_AGE": {
      return {
        ...state,
        age: action.age,
      };
    }

    default:
      return state;
  }
};

export default user;
