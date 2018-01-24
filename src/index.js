const resource = require('./resource');
const followEntity = require('./follow-entity');
const actionTemplate = require('./action-template');

module.exports = fetch => {
  return {
    resource: resource(fetch),
    followEntity: followEntity(resource(fetch)),
    actionTemplate
  };
};
