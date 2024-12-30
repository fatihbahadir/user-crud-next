export const generatePromiseActionType = (
    actionType: string,
    undoable: boolean = false
  ) => {
    const action = {
      REQUEST: `${actionType}/REQUEST`,
      SUCCESS: `${actionType}/SUCCESS`,
      ERROR: `${actionType}/ERROR`,
    };
  
    if (undoable) {
      return {
        ...action,
        UNDOABLE: `${actionType}/UNDOABLE`,
      };
    }
  
    return action;
  };