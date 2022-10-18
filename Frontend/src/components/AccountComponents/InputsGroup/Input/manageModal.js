const manageModal = (
  icon,
  label,
  userInfo,
  state,
  set,
  inputChange,
  iconChange
) => {
  inputChange(label);
  iconChange(icon);
  set(!state);
};

export default manageModal;
