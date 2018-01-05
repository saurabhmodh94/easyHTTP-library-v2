class EasyHTTP {
    // GET
    get(url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
    // POST
    post(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
    // PUT
    put(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
    // DELETE
    delete(url) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
}
