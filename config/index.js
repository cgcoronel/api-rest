const config = {
  server: {
    port: process.env.SERVER_PORT,
    killTimeout: process.env.SERVER_KILLTIMEOUT,
  },
  db: {
    filename: process.env.DB_FILE,
  },
  urlBase: process.env.URL_BASE,
};

module.exports = {
  ...config,
};
