import styled, { css } from "styled-components";
export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 425px) {
    width:100%;
  }
`;
export const UpperFooter = styled.div`
  background: #333333;
  color: #b8b8b8;
  padding: 35px 0 40px 0;
  margin: 0;
  font-size: 14px;
  line-height: 24px;
`;
export const LowerFooter = styled.div`
  background: #2a2a2a;
  color: #b0b0b0;
  padding: 18px 0;
  font-size: 14px;
  @media (max-width: 425px) {
    text-align:center;
  }
`;
export const ColumnLinks= styled.a`
text-decoration: none;
color:inherit;
&:hover{
  color:#fff ;
}
`;
export const A = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 600;
`;
export const UDiv = styled.div`
  display: flex;
  @media (max-width: 425px) {
   display:block;
  }
`;
export const Head = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
export const List = styled.ul`
list-style:none;
padding: 0;
  margin: 0;
`;
export const Li = styled.li`

`;
export const ColumnList = styled.div`
  width: 160px;
  margin-left: 10px;
  margin-right: 10px;
`;
export const ColumnContent = styled.div`
  width: 280px;
  margin-left: 10px;
  margin-right: 10px;
`;
export const Content = styled.p`
  margin: 0 0 15px 0;
`;
export const InputElement = styled.div`
  display: flex;
`;
export const InputTag = styled.input`
  color: #808080;
  padding: 11px 16px;
  background-color: #3a3a3a;
  border: 1px solid #474747;
  height: 20px;
  outline:0;
  font-weight: 600;
  font-family: inherit;
`;
export const SubscribeButton = styled.button`
  background-color:${({ theme }) => theme.color};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 14px;
  border: none;
  color: #fff;
  height: 44px;
  font-family:inherit;
`;
export const I=styled.i`
color: #fff;
margin-left:-5px;
`;