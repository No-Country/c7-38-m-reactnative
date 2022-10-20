export const initApp = async (id, dispatch, setIdT, setIdP, setIdA) => {
  await dispatch(setIdA(id));
  await dispatch(setIdP(id));
  await dispatch(setIdT(id));
};
