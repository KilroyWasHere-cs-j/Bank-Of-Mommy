class Login{
  public constructor(){}

  // All of this shit will need to find it's way to the backend
  public function fetchGraphQL(){
    fetch("https://bank-of-mommy.hasura.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "rVimQoSnkyIOlsPFkKJC8VX5ZuLP0XtoI8vdvYe3BmqEEPPY5yO7s48AX39mlY2E",
      },
    body: JSON.stringify({
      query: `
        query GetAccount {
          accounts(where: {Password_Hash: {_eq: "password123"}, Username: {_eq: "kilroy_was_here"}}) {
          Account_Num
        }
      }`,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response data 
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }

  function login(){
    alert(fetchGraphQL());
  }
}
