const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://fast-lms-react.OzoneTech.et"
		: "http://localhost:3000";

export default baseUrl;
