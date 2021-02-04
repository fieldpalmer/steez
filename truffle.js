module.exports = {
  // this is a configuration file I don't remember why we have 2, something about mac/pc compatbility?
  networks: {
    development: {
      host: "127.0.0.1", // localhost
      port: "7545", // pulled from ganache gui
      network_id: "*" // match any network id
    }
  }
};

