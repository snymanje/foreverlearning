export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IUserState {
  user: IUser;
  loading: boolean;
  error: string;
}

export type Actions =
  | {
      type: 'LOGIN_SUCCESS';
      payload: IUser;
    }
  | {
      type: 'LOGOUT';
    }
  | {
      type: 'LOAD_USER_LOCALSTORAGE';
      payload: IUser;
    }
  | {
      type: 'LOGIN_FAIL';
      payload: string;
    }
  | {
      type: 'LOAD_USER';
    };

export const authReducer = (state: IUserState, action: Actions): IUserState => {
  switch (action.type) {
    case 'LOAD_USER_LOCALSTORAGE':
      return {
        ...state,
        user: action.payload
      };
    case 'LOAD_USER':
      return {
        ...state,
        loading: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
