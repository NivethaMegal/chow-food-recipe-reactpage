import styled, { css } from "styled-components";
export const LeftImage = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 425px) {
    display: none;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const RightForm = styled.form`
  padding: 20px;
  width: 40%;
  font-size: 18px;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const UserAuthentication = styled.div`
  min-width: auto;
  max-width: 100%;
  display: flex;
`;
export const Heading = styled.p`
  font-size: 39px;
  color: rgb(51, 51, 51);
  line-height: 1.2;
  font-weight: 500;
  padding: 20px 0px 10px;
`;
export const InputElement = styled.div`
  border-bottom: 1px solid rgb(153, 153, 153);
  margin-bottom: 20px;
  position: relative;
  &:hover {
    border-bottom: 1px solid rgb(141, 198, 63);
  }
`;
export const Label = styled.label`
  color: rgb(153, 153, 153);
  line-height: 1.8;
  font-weight: 700;
`;
export const InputTag = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  color: rgb(141, 198, 63);
  outline: none;
`;
export const SignupButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: rgb(141, 198, 63);
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  border: none;
  outline: none;
  border-radius: 20px;
`;
export const SigninButton = styled(SignupButton)`
  background-color: transparent;
  color: rgb(153, 153, 153);
  float: right;
  &:hover {
    background-color: rgb(141, 198, 63);
    color: rgb(255, 255, 255);
  }
`;
export const Error = styled.div`
  color: red;
  font-size: 18px;
  font-weight: 500;
`;
export const Show = styled.div`
  color: rgb(141, 198, 63);
  position: absolute;
  right: 0;
  top: 50px;
  cursor: pointer;
`;
