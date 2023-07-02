enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

type Options = {
  method: METHODS;
  data?: any;
  timeout?: number;
};

function queryStringify(data: Record<string, any>) {
  const params = [];

  if (!data) {
    return "";
  }

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      if (Array.isArray(value)) {
        params.push(`${encodeURIComponent(key)}=${value.join(",")}`);
      } else if (typeof value === "object") {
        params.push(`${encodeURIComponent(key)}=${value}`);
      } else {
        params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  }

  return `?${params.join("&")}`;
}

class HTTPTransport {
  get = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.GET });
  };

  put = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  post = (url: string, options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  request(url: string, options: Options = { method: METHODS.GET }): Promise<XMLHttpRequest> {
    const { method = METHODS.GET, data, timeout = 5000 } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url + queryStringify(data));

      xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
      xhr.timeout = timeout;
      xhr.onload = function () {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}

function fetchWithRetry(url: string, options: any = {}): Promise<any> {
  const { retries = 3 } = options;
  function retry(err: string) {
    const temp = retries - 1;
    if (temp <= 0) {
      throw err;
    } else {
      return fetchWithRetry(url, { ...options, retries: temp });
    }
  }
  return new HTTPTransport().get(url, options).catch(retry);
}
