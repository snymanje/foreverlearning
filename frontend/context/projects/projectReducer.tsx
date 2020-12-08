export interface IProject {
  _id?: string;
  title: string;
  techStack: string;
  features: string;
}

export interface IProjectState {
  projects: IProject[];
  loading: boolean;
  error: string;
}

export type Actions =
  | {
      type: 'GET_PROJECTS';
      payload: IProject[];
    }
  | {
      type: 'ADD_PROJECT';
      payload: IProject;
    }
  | {
      type: 'DELETE_PROJECT';
      payload: IProject;
    }
  | {
      type: 'PROJECT_ERROR';
      payload: string;
    }
  | {
      type: 'LOAD_PROJECTS';
      payload: boolean;
    };

export const projectReducer = (state: IProjectState, action: Actions): IProjectState => {
  switch (action.type) {
    case 'LOAD_PROJECTS':
      return {
        ...state,
        loading: true
      };
    case 'GET_PROJECTS':
      return {
        ...state,
        projects: action.payload,
        loading: false,
        error: null
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        loading: false,
        error: null
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((p) => p._id !== action.payload._id),
        loading: false,
        error: null
      };
    case 'PROJECT_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
