const manageModal = (
  icon,
  label,
  userInfo,
  state,
  set,
  inputChange,
  iconChange
) => {
  console.log(icon, label, userInfo);
  inputChange(label)
  iconChange(icon)
  set(!state);
};

export default manageModal;
