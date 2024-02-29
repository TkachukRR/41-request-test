import { delay } from './utils.js';
import { singleRequest } from './singleRequest.js';

export async function sendingRequests(concurrencyLimit) {
  const requestsQuantity = 1000;
  const secondsForNextRequest = 1;
  let requests = [];
  let requestIndex = 1;

  for (let i = 1; i <= requestsQuantity; i++) {
    requests.push(singleRequest(requestIndex));
    if (concurrencyLimit >= 1 && requests.length === concurrencyLimit) {
      await Promise.all(requests);
      requests = [];
      await delay(secondsForNextRequest);
      requestIndex++;
    }
  }

  if (!requests.length) return;

  await Promise.all(requests);
  requests = [];
}
