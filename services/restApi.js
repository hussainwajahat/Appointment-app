/**
 * @function fetchWrapper
 * @param {string} arg1 - REST method | url
 * @param {string} [url] - url
 * @param {Object} [body] - body of message
 * @description
 *   Wrapper for the fetch api that provides options defaults and base response code handling.
 * @return {Promise<Object>} A promise containing the deserialized response object.
 * */
export const fetchWrapper = (arg1, url, body, additionalOptions) => {
  // if called with one argument, default to 'GET' method
  const _method = url ? arg1.toUpperCase() : "GET";
  // if called without method arg, the first
  const _url = url || arg1;

  const options = {
    method: _method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "8967305C-13F4-4A15-A84B-358E3F85C010",
      "client-key": "aaa61dcb-6d5f-4e31-834b-dc076bd221ed",
      Authorization: "Basic dGVzdGNsaW5pYzY6dGVzdGNsaW5pYzY=",
    },
    credentials: "include",
    body: body && JSON.stringify(body), // body can be undefined, that's ok
    ...additionalOptions,
  };

  return fetch(_url, options).then((response) => response.json());
};
