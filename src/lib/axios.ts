import axios  from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
if (!serverUrl) {
  throw new Error("SERVER_URL is not set in .env");
}

axios.create({
  baseURL: serverUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axios;
