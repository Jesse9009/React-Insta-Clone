// import React from 'react';
import styled from 'styled-components';

//   EXAMPLE SYNTAX FOR DIV
// export const StyledDiv = styled.div``;

//input
export const StyledTextInput = styled.input`
  box-sizing: border-box;
  height: 35px;
  width: 49.5%;
  outline: none;
  margin-bottom: 15px;
`;

export const AuthenticationForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 50px;
`;

export const AuthenticationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-width: 400px;
  margin: 0 auto;
  background-color: rgb(184, 233, 253);
  color: #313131;
`;

export const SubmitButton = styled.button`
  height: 30px;
  width: 15%;
  min-width: 100px;
  background-color: rgba(255, 153, 0, 0.712);
  outline: none;
  font-size: 1rem;
  color: #555555;
  cursor: pointer;
  transition: 0.25s;

  :hover {
    background-color: rgb(240, 156, 0);
    color: snow;
  }
`;

export const SearchBarWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 800px) {
    // flex-direction: column;
    justify-content: center;
    height: 120px;
    width: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const SBLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  padding-right: 5%;

  @media (max-width: 800px) {
  }
`;

export const SBhr = styled.hr`
  height: 30px;
  width: 1px;
`;

export const SearchBarInput = styled.input`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 20px;
  border-radius: 2px;
  border: 1px solid rgb(182, 182, 182);
  outline: none;

  @media (max-width: 800px) {
    width: 80%;
    margin: 0 auto;
    height: 30px;
  }
`;

export const SearchBarInputWrapper = styled.form`
  width: 35%;
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 800px) {
    width: 100%;
    order: 1;
  }
`;

export const SBIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  font-size: 1.6rem;
  font-weight: lighter;
  padding-right: 1rem;

  @media (max-width: 800px) {
    margin-left: 20%;
    width: 40%;
    padding: 15px 0;
    align-items: center;
  }
`;

export const SBListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: lighter;
  cursor: pointer;

  :hover {
    color: rgb(179, 37, 37);
    text-decoration: underline;
  }
`;

export const PostWrapper = styled.div`
  width: 60%;
  max-width: 600px;
  margin: 25px auto;
  border: 1px solid rgb(202, 202, 202);
  box-sizing: border-box;
`;

export const PHeader = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 0.8rem;

  img {
    border-radius: 50%;
    height: 40px;
    padding: 5px 2%;
  }
`;

export const PImg = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const PFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.4rem;

  .far,
  .fas {
    padding: 5px 0.4rem;
    font-size: 1.3rem;
    transition: 0.1s;
    cursor: pointer;
  }

  p {
    margin: 0px 0.4rem;
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

export const Comments = styled.div`
  box-sizing: border-box;
  text-align: left;
  padding: 0 0.8rem;

  span {
    font-weight: 600;
  }

  input {
    padding: 15px 0;
    border: none;
    border-top: 1px solid rgb(194, 194, 194);
    width: 100%;
    outline: none;
    font-size: 0.8rem;
  }
`;

export const SingleComment = styled.div`
  margin: 5px 0;
`;
