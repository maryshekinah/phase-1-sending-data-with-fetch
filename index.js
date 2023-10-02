// Add your code here
function submitData(){

const formData = {
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
};

return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        const newId = object.id;
        // Append the new ID to the DOM or perform any desired action.
        const idElement = document.createElement("p");
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);
    })

    .catch(function (error) {
        // Handle the error and append the error message to the DOM.
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
        // Return the error object for further error handling, if needed.
        return error;
    });

}