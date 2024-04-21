import axios from 'axios';

  // API end point
  const graphqlEndpoint = 'https://bank-of-mommy.hasura.app/v1/graphql';

  // ! Needs to be secret 
  const apiKey = 'rVimQoSnkyIOlsPFkKJC8VX5ZuLP0XtoI8vdvYe3BmqEEPPY5yO7s48AX39mlY2E';

  // Define headers with the API key
  const headers = {
    'x-hasura-admin-secret': apiKey, // Change to 'x-hasura-access-key' if needed
  };