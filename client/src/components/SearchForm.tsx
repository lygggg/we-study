import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { getSearch } from "../services/Search";
import { Search } from "../models/search";
import { searchState } from "../atom/search";

const SearchForm = () => {
  const navigateTo = useNavigate();
  const setSearch = useSetRecoilState(searchState);
  const { register, handleSubmit } = useForm<Search>();

  const onSeachClick = async ({ text }) => {
    const data = await getSearch(text);
    setSearch(data.quizs.hits);
    navigateTo("/search/query=" + text);
  };

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
