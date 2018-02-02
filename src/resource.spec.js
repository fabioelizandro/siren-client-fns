const resource = require('./resource');

const createFetch = ({ status = 200 }) => {
  return jest.fn(() => Promise.resolve({
    status,
    json: () => Promise.resolve({
      class: ['my-siren-resource']
    })
  }));
};

describe('resource', () => {
  it('calls fetch with the right endpoint', async () => {
    expect.assertions(1);
    const fetch = createFetch({});
    await resource(fetch)('http://example.com');
    expect(fetch).toHaveBeenCalledWith('http://example.com', undefined);
  });

  it('returns an resource', async () => {
    expect.assertions(1);
    const fetch = createFetch({});
    const response = await resource(fetch)('http://example.com');
    expect(response).toEqual({
      class: ['my-siren-resource']
    });
  });

  it('pass options to fetch the resource', async () => {
    expect.assertions(1);
    const fetch = createFetch({});
    await resource(fetch)('http://example.com', { foo: 'bar' });
    expect(fetch).toHaveBeenCalledWith(expect.any(String), { foo: 'bar' });
  });

  it('returns null when response has no content', async () => {
    expect.assertions(1);
    const fetch = createFetch({ status: 204 });
    const response = await resource(fetch)('http://example.com');
    expect(response).toEqual(null);
  });
});
