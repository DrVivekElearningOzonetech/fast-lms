module.exports = {
  development: {
    protocol: "http",
    hostname: "localhost",
    port: process.env.PORT ?? 3000,
  },
  production: {
    protocol: "https",
    hostname: process.env.HOST ?? "0.0.0.0",
    port: process.env.PORT ?? 3000,
  },
};
