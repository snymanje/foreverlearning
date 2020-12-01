export interface IProject {
  _id?: string;
  title: string;
  description: string;
  channel: string;
  instructor: string;
  duration: number;
}

export interface IProjectState {
  projects: IProject[];
  loading: boolean;
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
    };

export const projectReducer = (state: IProjectState, action: Actions): IProjectState => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        loading: false
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((p) => p._id !== action.payload._id),
        loading: false
      };
    default:
      return {
        ...state
      };
  }
};
