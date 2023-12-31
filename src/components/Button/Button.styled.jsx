import styled from 'styled-components';

export const LoadMore = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.blue};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  max-width: 300px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hoveredBlue};
  }
`;
