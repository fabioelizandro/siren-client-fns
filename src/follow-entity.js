module.exports = resource => {
  return entityClasses => {
    return sirenResource => {
      const entity = sirenResource.entities.find(entity => {
        return entityClasses.every(className => entity.class.includes(className));
      });

      return entity && resource(entity.href);
    };
  };
};
