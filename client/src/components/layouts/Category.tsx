import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Category({ categoryName, categoryId }) {
  return (
    <>
      <StyledLink to={`/categories/${categoryId}/page/1`}>
        <div>{categoryName}</div>
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #000000;
`;

export default Category;
