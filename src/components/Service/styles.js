import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PURPLE_200};

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_200};
    border-radius: 50%;
    height: 46px;
    width: 46px;
  }

  > div {

    text-align: center;

     h2 {
      font-size: 2.8rem;
      margin: 2.4rem 0 1.6rem;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    }

    p {
      font-size: 1.4rem;
      line-height: 2.6rem;
      color: ${({ theme }) => theme.COLORS.PURPLE_100};
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};

    }
  }
`;