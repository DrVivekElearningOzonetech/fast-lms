import { development, production } from "../host.config";

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") {
    return `${production.protocol}://${production.hostname}`;
  } else {
    return `${development.protocol}://${development.hostname}:3000`;
  }
}

const baseUrl = getBaseUrl();
export default baseUrl;
