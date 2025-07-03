import fetch from 'node-fetch';

fetch("http://localhost:8080/books")
.then((data => data.json())
.then((data) => console.log(data)));