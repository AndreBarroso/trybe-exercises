const API_URL = 'https://icanhazdadjoke.com/';
let h2 = document.getElementById('jokeContainer');
let  fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    document.getElementById('jokeContainer');
innerText = data.joke
  });
};
fetchJoke()