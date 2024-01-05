export default {
	development: {
		username: process.env.DB_USERNAME_DEV,
		password: process.env.DB_PASSWORD_DEV,
		database: process.env.DB_NAME_DEV,
		host: process.env.DB_HOSTNAME_DEV,
		port: process.env.DB_PORT_DEV,
		dialect: "mysql",
	},
	production: {
		username: process.env.DB_USERNAME_PROD,
		password: process.env.DB_PASSWORD_PROD,
		database: process.env.DB_NAME_PROD,
		host: process.env.DB_HOSTNAME_PROD,
		port: process.env.DB_PORT_PROD,
		dialect: "mysql",
		logging: false,
	},
};
