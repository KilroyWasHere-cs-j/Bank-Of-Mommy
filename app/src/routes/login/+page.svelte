<script lang="ts">
  
  let username = "";
  let password = "";

  let login_status = "";
  let login_attempts = 0;
  let login_attempts_cap = 5;

  let login_valid = true;

  let isValid = () => {
    return username.length > 0 && password.length > 0;
  };

  function login(){
    if(login_attempts != login_attempts_cap){
      if(login_valid){
        login_status = "Login successful!!"
        window.location.href = "dashboard"
      }
      else{
        login_status = "Incorrect username or password!";
        login_attempts++;
      }
    }
    else if(login_attempts == login_attempts_cap){
      login_status = "You are out of login attempts! Please try again later.";
    }
  }

</script>

<br>
<div class="bg-white m-10 rounded-xl drop-shadow-xl">
  <h1 class="flex justify-center text-6xl m-6">Login</h1>

  <div class="flex justify-center">
    <input type="text" bind:value={username} placeholder="Username" class="flex justify-center m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="password" bind:value={password} placeholder="Password" class="flex justify-center m-6 p-2 border-2 border-gray-300 rounded-md"/>
  </div>

  <div class="flex justify-center">
    <button class="m-6 p-2 bg-blue-500 text-white rounded-md" disabled={!isValid} on:click={() => login()}>Login</button>
  </div>
  <p class="flex justify-center">{login_status}</p>

</div>