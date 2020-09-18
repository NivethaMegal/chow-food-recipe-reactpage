import styled, { css } from "styled-components";
export const RecipeForm = styled.form`
width:100%;
 @media (max-width: 425px) {
    margin:10px;
  }
`;
export const Label = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #606060;
  font-weight: 500;
`;
export const InputElement = styled.div`
  width: 100%;
`;
export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  padding: 15px;
  line-height: 24px;
  resize:none;
  outline: none;
  background-color: #fff;
  font-weight: 600;
`;
export const InputTag = styled.input`
  font-weight: 600;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #777;
  padding: 14px 15px 12px 15px;
  line-height: 24px;
  outline: none;
  background-color: #fff;
`;
export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.color};
  padding: 10px 18px;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  outline: none;
  color: #fff;
  margin: 30px 0;
  border: none;
  &:hover {
    background-color: #808080;
  }
`;