const submit = require('./submit');

describe('submit', () => {
  it('submits request based upon action template', async () => {
    expect.assertions(1);
    const resource = jest.fn();
    const actionTemplate = {
      method: 'POST',
      href: 'http://example.com',
      type: 'application/json',
      fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'text' }
      ]
    };

    submit(resource)(actionTemplate)({ id: 1, name: 'foo' });

    expect(resource).toHaveBeenCalledWith('http://example.com', {
      method: 'POST',
      body: JSON.stringify({ id: 1, name: 'foo' }),
      headers: { 'Content-Type': 'application/json' }
    });
  });

  it('ignores any extra field', async () => {
    expect.assertions(1);
    const resource = jest.fn();
    const actionTemplate = {
      method: 'POST',
      href: 'http://example.com',
      type: 'application/json',
      fields: [
        { name: 'id', type: 'integer' }
      ]
    };

    submit(resource)(actionTemplate)({
      id: 1,
      extraField: 'extra value'
    });

    expect(resource).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
      body: JSON.stringify({ id: 1 }),
    }));
  });

  it('returns an resource', async () => {
    expect.assertions(1);
    const resource = jest.fn(() => Promise.resolve({
      class: ['my-siren-resource']
    }));

    const actionTemplate = {
      method: 'POST',
      href: 'http://example.com',
      type: 'application/json',
      fields: [
        { name: 'id', type: 'integer' }
      ]
    };

    const response = await submit(resource)(actionTemplate)({
      id: 1
    });

    expect(response).toEqual({
      class: ['my-siren-resource']
    });
  });
});
