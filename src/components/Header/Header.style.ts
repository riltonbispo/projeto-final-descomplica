import styled, { css } from "styled-components";

type HeaderStyleType = {
  hasProducts?: boolean;
  quantity?: string;
};

export const HeaderStyle = styled.nav<HeaderStyleType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 180px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;

  .cart {
    display: flex;
    align-items: center;
    gap: 30px;

    & i {
      position: relative;

      ${(props) =>
        props.hasProducts &&
        css`
          &::after {
            content: '';
            position: absolute;
            top: 0;
            right: -8px;
            width: 8px;
            height: 8px;
            background-color: red;
            border-radius: 50%;
            display: ${props.hasProducts ? "block" : "none"};
          }
        `}
    }
  }
`;
