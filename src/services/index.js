const shortid = require('shortid');
const config = require('../../config');
const { db, urlBase } = config;

const store = require('data-store')({
  path: db.filename,
});

/**
 * save url service.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const saveUrl = async (url) => {
  const id = urlBase + shortid.generate();

  const domain = new URL(url).hostname.replace('www.', '');

  const { data = [] } = await store.get();

  data.push({ id, url, domain });
  await store.set('data', data);
};

/**
 * get url service.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getUrl = async (id) => {
  const data = await store.get('data');

  const fullid = urlBase + id;

  const url = data.filter((d) => d.id === fullid);

  return url.length > 0 ? url[0] : null;
};

/**
 * get url service.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getFullUrl = async (fullUrl) => {
  const data = await store.get('data');

  const url = data.filter((d) => d.url === fullUrl);

  return url.length > 0 ? url[0] : null;
};

/**
 * get domain service.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getDomain = async () => {
  const { data } = await store.get();

  const allDomains = [...new Set(data.map((d) => d.domain))];

  return allDomains;
};

module.exports = {
  saveUrl,
  getUrl,
  getFullUrl,
  getDomain,
};
