export default function http() {}

http.request = (method, url, options = {params: {}, headers: {}}) => new Promise((y, n) => {
  var xhr = new XMLHttpRequest();

  Object.keys(options.headers).forEach(x => xhr.setRequestHeader(x, options.headers[x]));
  xhr.onload = () => (xhr.status >= 200 && xhr.status < 300) ?
    y(JSON.parse(xhr.response)) : n(Error(xhr.statusText));
  xhr.onerror = () => n(Error("Network Error"));
  xhr.open(method, url);
  xhr.send(Object.keys(options.params).map(x => `{encodeURIComponent(x)}={encoodeURIComponent(args[x])}`).join('&'));
});

http.get    = (url) => http.request('GET', url);
http.post   = (url, options) => http.request('POST', url, options);
http.put    = (url, options) => http.request('PUT', url, options);
http.delete = (url, options) => http.request('DELETE', url, options);
