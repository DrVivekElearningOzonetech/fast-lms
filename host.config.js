module.exports = {
  development: {
    protocol: "http",
    hostname: "localhost",
  },
  production: {
    protocol: "https",
    hostname: process.env.HOST ?? "0.0.0.0",
  },
};
