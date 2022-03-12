import React from "react";
import styled from "@emotion/styled";

console.log(styled);

const RedButton = styled.button`
  background-color: red;
`;

const Hello = () => {
  return (
    <div>
      <RedButton />
    </div>
  );
};

export default Hello;
