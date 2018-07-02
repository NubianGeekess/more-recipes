const main = () => {
    signup( "Zezzy Godswill", "zezzy.godswill@gmail.com","!Mypassw@rd" );
};

const getRecieps = () => {
    const url = 'https://more-recipes.herokuapp.com/api/v1/users/signin';
    var request = new Request(url);
    
    fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then(function(data) {
        console.log(data);
    })

    .catch(function() {
        // This is where you run code if the server returns any errors
    });
}

const signup = (fullname, email, password) => {
    // const fullname = "Zezzy Godswill";
    // const email = "zezzy.godswill@gmail.com";
    // const pass = "!Mypassw@rd";
    const url = 'https://more-recipes.herokuapp.com/api/v1/users/signup';
    
    // The data 
    let data = {
        "user": {
            "fullname": fullname,
            "email": email,
            "password": password,
         }
      }

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

    // Create our request constructor with all the parameters we need
    var request = new Request(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: headers
    });

    fetch(request)
    .then((resp) => {
        return resp.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
    })

}

main();