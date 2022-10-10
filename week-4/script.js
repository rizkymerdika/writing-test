fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) // untuk unboxing data
    .then(data => console.log(data))
    .catch(error => console.log(error))

let testFetchAsync = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        response = await response.json() // untuk unboxing data
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
testFetchAsync()