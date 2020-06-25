import styled, {css} from 'styled-components/native';
interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 350px;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: #a9a9a9;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff8c00;
    `}
`;
export const TextInput = styled.TextInput`
  color: #111;
  font-size: 20px;
  right: 10px;
`;
