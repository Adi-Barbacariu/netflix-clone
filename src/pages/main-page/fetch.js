import axios from "axios";

async function fetch(url) {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetch;
