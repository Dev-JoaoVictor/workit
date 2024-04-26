import styled from "styled-components";

export const Container = styled.main`

  h1 {
     font-family: ${({ theme }) => theme.FONTS.PRIMARY};
     font-size: ${({theme}) => theme.FONT_SIZE.L};
  }
`;