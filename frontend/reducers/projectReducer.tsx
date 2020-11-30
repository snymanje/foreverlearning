export const projectReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          title: action.project.title
        }
      ];
  }
};
