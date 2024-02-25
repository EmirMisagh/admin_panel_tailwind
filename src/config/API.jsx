import axios from "axios";

export const ApiUrl = "http://localhost:8080";

async function resolve(promise) {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await promise;
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

async function getUserAll() {
  return await resolve(
    axios.get(`${ApiUrl}/author`).then((res) => res.data.data)
  );
}

async function getUserOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/author/${id}`).then((res) => res.data.data)
  );
}

async function getUserEmail(email) {
  return await resolve(
    await axios.get(`${ApiUrl}/author/email/${email}`).then((res) => res.data)
  );
}

async function createUser(body) {
  return await resolve(
    axios.post(`${ApiUrl}/author/create`, body).then((res) => res.data)
  );
}

export { getUserOne, getUserAll, createUser, getUserEmail };
