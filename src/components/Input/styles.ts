import styled, {css} from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
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
  flex-direction: row;
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
  flex: 1;
  color: #111;
  font-size: 20px;
`;
export const Icon = styled(FontAwesome5)`
  margin-right: 20px;
  margin-top: 16px;
`;

export const IconRight = styled(FontAwesome5)`
  justify-content: center;

  top: 15px;
`;
