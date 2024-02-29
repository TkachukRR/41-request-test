const SERVER_URL = '/api';

export async function sendingRequests(concurrencyLimit) {
  const requestsQuantity = 1000;
  let requests = [];

  for (let i = 1; i <= requestsQuantity; i++) {
    requests.push(singleRequest());
    if (concurrencyLimit >= 1 && requests.length === concurrencyLimit) {
      // console.log('limit', concurrencyLimit);
      await Promise.all(requests);
      requests = [];
    }
  }

  if (!requests.length) {
    // console.log('no residual requests');
    return;
  }

  // console.log('no Limit or residual requests');
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
