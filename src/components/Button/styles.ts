import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 350px;
  height: 60px;
  background-color: #ff9000;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
`;
export const Icon = styled(Feather)`
  right: 10px;
  font-size: 20px;
`;
