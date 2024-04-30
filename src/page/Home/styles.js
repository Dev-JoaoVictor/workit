import styled from "styled-components";

export const Header = styled.header`
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background-color: ${({ theme }) => theme.COLORS.PURPLE_200};

  padding: 0 1.6rem;
  position: relative;
  height: 48rem;

  > img {
    position: absolute;
    left: 50px;
  }

  > div {
    animation: inicial 500ms  backwards;

    nav {
      padding-top: 3.2rem;
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
        font-size: 3.4rem;
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

export const Services = styled.section`
  display: flex;
  gap: 4rem;
  flex-direction: column;

  padding: 0 1.6rem;
  margin-top: 12rem;
`;