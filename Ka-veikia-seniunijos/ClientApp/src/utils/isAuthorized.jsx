const isAuthorized = (data) => {
  // Pull user id ,isEldership and token from data then generate token and compare with current
  if (data === null) return false;
  else if (data.Id === 1) {
    console.log(data.Id);

    return true;
  }
};
export default isAuthorized;
