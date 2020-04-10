export const baseUrl = "http://localhost:3000";

/**
 * @typedef {Object} HttpClientOptions
 * @property {any} body
 * @property {string} endpoint
 * @property {boolean} externalHost
 * @property {'DELETE' | 'GET' | 'POST' | 'PUT'} method
 * @property {'json' | 'blob' | 'text'} responseType
 * @property {boolean} defaultHeaders
 */

/**
 *
 * @param {HttpClientOptions} httpClientOptions
 * @returns {Promise<any>}
 */
export const httpClient = (httpClientOptions) => {
  const { endpoint, defaultHeaders, externalHost } = httpClientOptions;

  return new Promise((resolve, reject) => {
    fetch(externalHost ? externalHost : baseUrl.concat(endpoint), {
      body: JSON.stringify(httpClientOptions.body),
      headers: defaultHeaders ? {
        'Content-Type': 'application/json'
      } : defaultHeaders,
      method: httpClientOptions.method,
    })
      .then(res => res[httpClientOptions.responseType ? httpClientOptions.responseType : 'json']())
      .then(data => resolve(data))
      .catch(reject)
  })
};