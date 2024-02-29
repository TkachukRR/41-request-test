import { URL, PORT, API } from './server.js';

export async function singleRequest(index) {
  try {
    const response = await fetch(`${URL}:${PORT}${API}?index=${index}`);
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Request error:', error);
  }
}
