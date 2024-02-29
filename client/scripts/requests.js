const SERVER_URL = '/api';

export async function sendingRequests() {
  const requestsQuantity = 1000;
  let requests = [];

  for (let i = 1; i <= requestsQuantity; i++) {
    requests.push(singleRequest());
  }

  await Promise.all(requests);
  requests = [];
}

async function singleRequest() {
  try {
    const response = await fetch(SERVER_URL);
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Request error:', error);
  }
}
