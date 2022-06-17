import styled from "styled-components";

export const Button = styled.div`
  width: auto;
  padding: 10px;
  height: auto;
  background-image: linear-gradient(
    to right,
    #16222a 0%,
    #3a6073 51%,
    #16222a 100%
  );
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  opacity: 0.9;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: linear-gradient(
      to right,
      #1d976c 0%,
      #93f9b9 51%,
      #1d976c 100%
    );
    color: #fff;
  }

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
