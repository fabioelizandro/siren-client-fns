module.exports = fetch => actionTemplate => {
  const { href, method, type, fields } = actionTemplate;

  return (payload) => {
    const initialBody = {};
    const body = fields.reduce((partialBody, field) => ({
      ...partialBody,
      [field.name]: payload[field.name]
    }), initialBody);

    return fetch(href, {
      method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': type }
    }).then(response => response.json());
  };
};
