import styled from 'styled-components/native';
import colors from '../../styles/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 20px;
`;

export const AreaLogin = styled.View`
  flex: 1;
`;
export const AreaInput = styled.View`
  flex: 1;
  padding-top: 55px;
  margin-bottom: 100px;
`;
export const InputOrange = styled.View`
  background-color: #ff8c00;
  height: 20px;
  width: 90px;
  border-radius: 12px;
`;
export const AreaButtonSignIn = styled.View`
  flex: 1;
`;
export const IconCircleFull = styled(FontAwesome)``;
export const IconCircle = styled(Feather)``;
export const AreaCircle = styled.View``;
export const AreaCircleText = styled.View`
  font-size: 20px;
`;
export const ViewIconCircle = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;
export const TextCircle = styled.Text`
  font-size: 20px;
  padding-left: 20px;
  bottom: 3px;
`;
export const TextNiveis = styled.Text`
  font-size: 20px;
`;
export const TextRegister = styled.Text`
  font-size: 20px;
`;
