export interface IProject {
  title: string;
  description: string;
  channel: string;
  instructor: string;
  duration: number;
}

export interface IProjectState {
  projects: IProject[];
}

export interface IDispatch {
  type: string;
  project: IProject;
}

export const projectReducer = (state: IProjectState, action: IDispatch): IProjectState => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [action.project, ...state.projects]
      };
  }
};
