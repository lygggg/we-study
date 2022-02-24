import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuStore from "../../stores/MenuStore";
import Category from "../items/Category";

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

const Text = styled.li`
  font-size: 20px;
`;

const Container = styled.ul`
  height: 50px;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px;
  align-items: center;
`;

export default Menu;
