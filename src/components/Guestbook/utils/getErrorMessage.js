export const getErrorMessage = (errorMsg) => {
  const errorMessages = {
    "User not found": "Bruker finnes ikke",
    "Incorrect username or password": "Feil brukernavn eller passord",
    "User already exists": "Bruker finnes allerede",
    "You do not have permission to update this post": "Du har ikke tilgang til å endre denne posten.",
  };

  return errorMessages[errorMsg];
};
