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

  @media screen and (min-width: 768px){

    height: 54rem;

    section {
      display: flex;
      align-items: center;
      flex-direction:column;

      h1 {
        font-size: 6rem;
      }
    }

    > img {
      width: 51.4rem;
    }
  }
`;

export const Services = styled.section`
  display: flex;
  gap: 4rem;
  flex-direction: column;

  padding: 0 1.6rem;
  margin-top: 12rem;

  @media screen and (min-width: 768px){
    margin-top: 24rem;
    align-items: center;
  }
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
    border-radius: 8px;

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

  @media screen and (min-width: 768px) {
    padding: 0 4rem;

    > img {
      position: relative;
      left: -200px;
    }

    > div {
      width: 51.4rem;
      top: -130px;
      right: -180px;
      text-align: left;

      padding: 5.6rem;

      h3 {
        font-size: 4.8rem;
      }

      p {
        margin: 2.4rem 0;
      }
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