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
}

const initialState = {
  name: "",
  username: "",
  age: "",
};

const user = (state: IState = initialState, action: IActoin) => {
  switch (action.type) {
    case "SET_USER_NAME": {
      return {
        ...state,
        name: action.name,
      };
    }

    case "SET_USER_USERNAME": {
      return {
        ...state,
        username: action.username,
      };
    }

    case "SET_USER_AGE": {
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
