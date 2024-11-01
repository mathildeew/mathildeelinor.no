export const getErrorMessage = (errorMsg) => {
  const errorMessages = {
    "User not found": "Bruker finnes ikke",
    "Incorrect username or password": "Feil brukernavn eller passord",
  };

  return errorMessages[errorMsg];
};
