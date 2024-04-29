import styled from "styled-components";

export const Container = styled.main`

`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_200};

  height: 48rem;
  padding: 1.6rem 3.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  
  
  > div {
    animation: inicial 500ms  backwards;
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-family: ${({ theme }) => theme.FONTS.SECONDARY};
        font-weight: bold;
        text-decoration: none;
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.GREEN};
        padding-bottom: 2px ;
      }
    }

    section {
      margin: 6.4rem 0;
      text-align: center;

      h1 {
        font-size: ${({ theme }) => theme.FONT_SIZE.SM};
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        margin-bottom: 4rem;

        strong {
          border-bottom: 2px solid ${({ theme }) => theme.COLORS.GREEN};
        }
      }
    }
  }

  @keyframes inicial {
    0% {
      opacity: 0.1;
      transform: translateX(25px);
    }
  }
`;