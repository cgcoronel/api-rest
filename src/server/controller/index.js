const service = require('../../services');

/**
 * Save url controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const saveUrl = async (req, res) => {
  const url = req.body && req.body.url ? req.body.url : 'empty data';

  //check url exists
  const exists = await service.getFullUrl(url);

  if (exists) {
    res.status(208).json({ message: 'already exists', data: exists });
    return;
  }

  await service.saveUrl(url);

  res.status(201).json({ message: 'save success' });
};

/**
 * Get url controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getUrl = async (req, res) => {
  const id = req.body && req.params ? req.params.id : 'empty data';

  const data = await service.getUrl(id);

  if (!data) {
    res.status(404).json({ message: 'not found' });
    return;
  }

  res.status(200).json({ data });
};

/**
 * get domain controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const getDomain = async (req, res) => {
  const data = await service.getDomain();

  res.status(200).json({ data });
};

module.exports = {
  saveUrl,
  getUrl,
  getDomain,
};
