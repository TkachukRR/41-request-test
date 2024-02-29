const SERVER_URL = '/api';

export async function sendingRequests(concurrencyLimit) {
  const requestsQuantity = 1000;
  const secondsForNextRequest = 1;
  let requests = [];
  let requestIndex = 1;

  for (let i = 1; i <= requestsQuantity; i++) {
    requests.push(singleRequest(requestIndex));
    if (concurrencyLimit >= 1 && requests.length === concurrencyLimit) {
      // console.log('limit', concurrencyLimit);
      await Promise.all(requests);
      requests = [];
      await delay(secondsForNextRequest);
      requestIndex++;
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

async function singleRequest(index) {
  try {
    const response = await fetch(SERVER_URL + `?index=${index}`);
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Request error:', error);
  }
}

function delay(seconds) {
  const ms = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, ms));
}
