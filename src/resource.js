module.exports = fetch => {
  return url => {
    return fetch(url).then(response => response.json());
  };
};
