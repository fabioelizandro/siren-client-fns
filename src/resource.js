const NO_CONTENT = 204;

module.exports = fetch => {
  return (url, options) => {
    return fetch(url, options)
      .then(response => {
        const status = response.status;

        if (status === NO_CONTENT) {
          return Promise.resolve(null);
        }

        return response.json();
      });
  };
};
