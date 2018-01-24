module.exports = actionName => {
  return sirenResource => {
    return sirenResource.actions.find(action => action.name === actionName);
  };
};
