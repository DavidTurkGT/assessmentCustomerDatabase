// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch("https://randomuser.me/api/?results=12").then(
    function(response){
      if (response.status !== 200) {
        console.log("Response status error, ",response.status);
        return;
      }
      response.json().then(function(data){
        console.log("Data received: ",data);
        addUsers(data);
      })
    },
    function(reject){
      console.log("API call rejected. Seek help");
    }
  )

  function addUsers(data){
    let customers = document.querySelector(".customers");
    let customersList = document.createElement("ul");
    let customersArray = data.results;
    console.log("First customer ",customersArray[0]);
    for(let i = 0; i < customersArray.length; i++){
      let li = document.createElement("li");

      let div = document.createElement("div");
      div.classList.add("customer_box");

      let img = document.createElement("img");
      img.src=customersArray[i].picture.large;
      div.appendChild(img);

      let name = document.createElement("h3");
      name.textContent = customersArray[i].name.title + ". " +        customersArray[i].name.first + " " + customersArray[i].name.last;
      div.appendChild(name);

      let email = document.createElement("h4");
      email.textContent = customersArray[i].email;
      div.appendChild(email);

      let address = document.createElement("h5");
      address.textContent = customersArray[i].location.street;
      div.appendChild(address);

      let city = document.createElement("h5");
      city.textContent = customersArray[i].location.city + ", " + customersArray[i].location.state + ", " + customersArray[i].location.postcode;
      div.appendChild(city);

      let phone = document.createElement("h5");
      phone.textContent = customersArray[i].phone;
      div.appendChild(phone);

      li.appendChild(div);
      customersList.appendChild(li);
    }
    console.log(customersList);
    customers.appendChild(customersList)
  }

})();
