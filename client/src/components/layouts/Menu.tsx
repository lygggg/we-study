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
  font-size: 18px;
`;

const Container = styled.ul`
  height: 50px;
  margin-top: 110px;
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 65px;
  align-items: center;
  min-width: 1000px;
  max-width: 1350px;
  padding-left: 100px;
  padding-right: 100px;
`;

export default Menu;
