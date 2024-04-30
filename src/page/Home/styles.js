import styled from "styled-components";

export const Header = styled.header`
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background-color: ${({ theme }) => theme.COLORS.PURPLE_200};

  height: 48rem;
  padding: 0 1.6rem;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    padding-top: 3.2rem;

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

  > img {
    align-self: center;
    width: 30rem;
  }
`;

export const Services = styled.section`
  display: flex;
  gap: 4rem;
  flex-direction: column;

  padding: 0 1.6rem;
  margin-top: 12rem;
`;

export const Message = styled.section`
  text-align: center;
  margin-top: 10rem;
  padding: 1.6rem;
  position: relative;

  img {
    width: 28rem;
  }

  > div {
    padding: 3rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background-color: ${({ theme }) => theme.COLORS.PURPLE_200};

    position:relative;
    top: -54px;

    h3 {
      font-size: 3rem;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    }

    p {
      font-size: 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      line-height: 2.8rem;
      margin: 1.6rem 0 2.4rem;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  gap: 5.7rem;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  margin: 7.4rem 0;
  padding:  0 1.6rem;

  div {
    display: flex;
    gap: 2.8rem;
  }
`;