const followEntity = require('./follow-entity');

describe('follow entity', () => {
  it('follows the entity that matchs with classes', () => {
    const resource = jest.fn();
    
    const sirenResource = {
      class: ['root'],
      entities: [
        { class: ['my-class'], href: 'http://example.com/my-class' }
      ]
    };

    followEntity(resource)(['my-class'])(sirenResource);
    expect(resource).toHaveBeenCalledWith('http://example.com/my-class');
  });

  it('follows just if every classes metches', () => {
    const resource = jest.fn();

    const sirenResource = {
      class: ['root'],
      entities: [
        { class: ['my-class', 'single'], href: 'http://example.com/my-class' }
      ]
    };

    followEntity(resource)(['my-class', 'collection'])(sirenResource);
    expect(resource).not.toHaveBeenCalled();
  });
});