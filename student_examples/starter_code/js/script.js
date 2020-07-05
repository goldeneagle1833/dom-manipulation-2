const BASE_URL = "https://swapi.dev/api/";

function renderInfo() {
  fetch(BASE_URL + "people")
    .then((res) => res.json())
    .then((data) => {
      /*
       * Here is where you will write all the code to render the information we received from the API call
       * Hint 1:
       *
       */
      console.log(data.results); // <== remember this is just an array of objects. Take a look at it in the chrome console
      data.results.map((person) =>{
        
      const h1 = document.createElement("h1");
      h1.innerHTML = person.name;
      const h2 = document.createElement("h2");
      h2.innerHTML = person.birth_year;
      const h3 = document.createElement("h3");
      h3.innerHTML = person.hair_color;

      const div = document.createElement("div").appendChild(h1);
      div.appendChild(h2);
      div.appendChild(h3);
      const parent = document.getElementById("parent");
      parent.appendChild(div);
    });
})
    .catch((e) => console.error(e.message))
    .finally(() => console.log("API call finished"));
}

renderInfo(); // <== uncomment this line to get started with receiving API info and seeing it
