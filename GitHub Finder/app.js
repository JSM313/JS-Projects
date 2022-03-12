// Creating the github Object
const github = new GitHub();

// Creating the UI object
const ui = new UI();

const searchUser = document.querySelector("#searchUser");

searchUser.addEventListener("keyup", (e) => {
  // Get input text

  // It will log what the user is typing
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github
      .getUser(userText)
      // ---------------------
      .then((data) => {
        if (data.profile.message === "Not Found") {
          // Show Alert that user not found

          ui.showAlert("User not found ", "alert alert-danger");
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
