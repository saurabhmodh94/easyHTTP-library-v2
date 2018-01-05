let http = new EasyHTTP();
let responseDiv = document.getElementById('response');

document.getElementById('get').onclick = function () {
    http.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(data => responseDiv.innerText = JSON.stringify(data))
        .catch(err => alert(err));
}

document.getElementById('post').onclick = function () {
    http.post('https://jsonplaceholder.typicode.com/posts', { title: 'Hello', message: 'World' })
        .then(data => responseDiv.innerText = JSON.stringify(data))
        .catch(err => alert(err));
}

document.getElementById('put').onclick = function () {
    http.put('https://jsonplaceholder.typicode.com/posts/1', { title: 'Hello', message: 'World' })
        .then(data => responseDiv.innerText = JSON.stringify(data))
        .catch(err => alert(err));
}

document.getElementById('delete').onclick = function () {
    http.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(data => responseDiv.innerText = JSON.stringify(data))
        .catch(err => alert(err));
}
