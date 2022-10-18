const fetchDataFromServer = () => {
  fetch("http://localhost:5000/data", {method: "PUT", creadentials: "include"})
    .then((res) => res.json())
    .then((data) => console.log(data))
}

fetchDataFromServer()