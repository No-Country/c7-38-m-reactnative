const editInput = (label, value, userInfo, setuserInfo) => {
  if (label == "User") {
    console.log("User");
    setuserInfo({ ...userInfo, userName: value });
  }
  if (label == "Email") {
    setuserInfo({ ...userInfo, email: value });
  }
  if (label == "Phone") {
    setuserInfo({ ...userInfo, phone: value });
  }
  if (label == "Weight") {
    setuserInfo({ ...userInfo, weight: value });
  }
  if (label == "Objetive") {
    setuserInfo({ ...userInfo, idealWeight: value });
  }
  if (label == "Image") {
    setuserInfo({ ...userInfo, image: value });
  }
};

export default editInput;
