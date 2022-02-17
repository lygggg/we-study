import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSearch } from "../services/Search";
import { searchState } from "../atom/search";
import { searchValidation } from "../validations/searchYup";

interface SearchFormState {
  text: string;
}

const SearchForm = () => {
  const navigateTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearch = useSetRecoilState(searchState);
  const { register, handleSubmit } = useForm<SearchFormState>({
    resolver: yupResolver(searchValidation),
  });

  const onSearch = async (query: string) => {
    const data = await getSearch(query);
    setSearch(data.quizs.hits);
  };

  const onSeachClick = async ({ text }) => {
    navigateTo("/search/?query=" + text);
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      onSearch(query);
    }
  }, [searchParams.get("query")]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSeachClick)}>
        <FormContainer>
          <Img
            alt="검색"
            src={
              "https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"
            }
          />
          <Input placeholder="검색 가능" type="text" {...register("text")} />
        </FormContainer>
      </Form>
    </Container>
  );
};

const Img = styled.img`
  align-self: center;
  height: 50px;
  width: 50px;
`;

const FormContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  margin-top: 40px;
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
  border: 1px solid #dfe1e5;
  padding-left: 20px;
`;

export default SearchForm;
