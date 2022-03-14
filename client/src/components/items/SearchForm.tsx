import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchValidation } from "../../validations/searchYup";
import { useSearch } from "../../hook/useSearch";

export interface SearchFormState {
  text: string;
}

const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchFormState>({
    resolver: yupResolver(searchValidation),
  });
  return (
    <Container>
      <Form onSubmit={handleSubmit(useSearch())}>
        <FormContainer>
          <Input placeholder="검색 가능" type="text" {...register("text")} />
        </FormContainer>
      </Form>
    </Container>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  text-align: -webkit-center;
`;

const Form = styled.form`
  height: 100%;
  width: 500px;
`;

const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 24px;
  border: 0px solid #dfe1e5;
  padding-left: 20px;
`;

export default SearchForm;
