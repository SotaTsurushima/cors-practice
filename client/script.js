const fetchDataFromServer = () => {
  fetch("http://localhost:5000/data", {method: "PUT"})
    .then((res) => res.json())
    .then((data) => console.log(data))
}

fetchDataFromServer()