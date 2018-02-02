const resource = require('./resource');

const createFetch = () => {
  return jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      class: ['my-siren-resource']
    })
  }));
};

describe('resource', () => {
  it('calls fetch with the right endpoint', async () => {
    expect.assertions(1);
    const fetch = createFetch();
    await resource(fetch)('http://example.com');
    expect(fetch).toHaveBeenCalledWith('http://example.com');
  });

  it('returns an resource', async () => {
    expect.assertions(1);
    const fetch = createFetch();
    const response = await resource(fetch)('http://example.com');
    expect(response).toEqual({
      class: ['my-siren-resource']
    });
  });
});
