import React, { useState } from "react";

const useListClose = () => {
  const [closeList, setcloseList] = useState(true);
return {closeList,setcloseList}
};

export default useListClose;
