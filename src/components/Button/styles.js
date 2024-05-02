import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  padding: 1.8rem;
  border: none;
  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  font-weight: bold;
  font-size: 1.6rem;
  border-radius: 8px;
`;