function doGetHTTPRequest(url, port, resource, callbackFunction, callbackErrorFunction) {
    fetch(`${url}:${port}/${resource}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`An error occurred: ${response.status}`);
            }
        })
        .then(data => {
            callbackFunction(data);
        })
        .catch(error => {
            callbackErrorFunction(error);
        });
}