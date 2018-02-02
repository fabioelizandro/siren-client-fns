const resource = require('./resource');
const followEntity = require('./follow-entity');
const actionTemplate = require('./action-template');
const submit = require('./submit');

module.exports = fetch => {
  return {
    resource: resource(fetch),
    followEntity: followEntity(resource(fetch)),
    actionTemplate,
    submit: submit(resource(fetch)),
    createAction: actionName => sirenResource => submit(resource(fetch))(actionTemplate(actionName)(sirenResource))
  };
};
