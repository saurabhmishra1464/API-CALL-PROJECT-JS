const postListContainer = document.querySelector('.post-list-container');


//fetch using xhr

function fetchUsingXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            displayResponse(xhr.response);
        } else { console.log('Some Error') }
    }
}

function displayResponse(posts) {
    debugger
    postListContainer.innerHTML = posts.map(
        (postItem) =>
            `
    <div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.completed}</P>
    </div>
    `
    ).join(" ");
}

function fetchUsingFetchMethod() {
    debugger
    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET',
    })
    fetchRequest.then(response => response.json()).then(result => displayResponse(result)).catch(e => console.log(e));
}

async function fetchUsingAsyncAwaitMethod() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET',
    })
    const result = await response.json();
    displayResponse(result);
}

function helperMethod(method, url) {
    debugger
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        }
    })
    return promise;
}

async function fetchUsingXHRAndAsyncAwait() {
    const response = await helperMethod('GET', "https://jsonplaceholder.typicode.com/todos");
    console.log("=========================");
    console.log(response);
    console.log("=========================");
    displayResponse(response);
}

// fetchUsingXHR();
// fetchUsingFetchMethod();
// fetchUsingAsyncAwaitMethod();
fetchUsingXHRAndAsyncAwait();