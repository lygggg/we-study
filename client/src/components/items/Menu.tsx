import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuStore from "../../stores/MenuStore";
import Category from "../layouts/Category";

const Menu = () => {
  const categories = MenuStore.getCategories();
  return (
    <>
      <Container>
        {categories.map((category, index) => (
          <Text key={index}>
            <Category categoryName={category} categoryId={index} />
          </Text>
        ))}
      </Container>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #000000;
`;

const Text = styled.div`
  font-size: 20px;
  color: #263747;
`;

const Container = styled.div`
  height: 50px;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px;
  align-items: center;
`;

export default Menu;
