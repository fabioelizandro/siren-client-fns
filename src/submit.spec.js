const submit = require('./submit');

const createFetch = () => {
  return jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      class: ['my-siren-resource']
    })
  }));
};

describe('submit', () => {
  it('submits request based upon action template', async () => {
    expect.assertions(1);
    const fetch = createFetch();
    const actionTemplate = {
      method: 'POST',
      href: 'http://example.com',
      type: 'application/json',
      fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'text' }
      ]
    };

    submit(fetch)(actionTemplate)({ id: 1, name: 'foo' });

    expect(fetch).toHaveBeenCalledWith('http://example.com', {
      method: 'POST',
      body: JSON.stringify({ id: 1, name: 'foo' }),
      headers: { 'Content-Type': 'application/json' }
    });
  });

  it('ignores any extra field', async () => {
    expect.assertions(1);
    const fetch = createFetch();
    const actionTemplate = {
      method: 'POST',
      href: 'http://example.com',
      type: 'application/json',
      fields: [
        { name: 'id', type: 'integer' }
      ]
    };

    submit(fetch)(actionTemplate)({
      id: 1,
      extraField: 'extra value'
    });

    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
      body: JSON.stringify({ id: 1 }),
    }));
  });

  it('returns an resource', async () => {
    expect.assertions(1);
    const fetch = createFetch();
    const actionTemplate = {
      method: 'POST',
      href: 'http://example.com',
      type: 'application/json',
      fields: [
        { name: 'id', type: 'integer' }
      ]
    };

    const response = await submit(fetch)(actionTemplate)({
      id: 1
    });

    expect(response).toEqual({
      class: ['my-siren-resource']
    });
  });
});
