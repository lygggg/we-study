import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

interface CategoryProps {
  categoryName: String;
  categoryId: String | Number;
}

const Category = ({ categoryName, categoryId }: CategoryProps) => {
  return (
    <>
      <StyledLink to={`/categories/${categoryId}/page/1`}>
        {categoryName}
      </StyledLink>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration-line: none;
  transition: all 0.5s ease;
`;

export default Category;
