const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.APP_HOST ?? "http://localhost:3000"
    : "http://localhost:3000";

export default baseUrl;
