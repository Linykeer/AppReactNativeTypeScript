import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled.TouchableOpacity`
  width: 420px;
  height: 60px;
  background-color: #d3d3d3;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  flex-direction: row;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
`;
export const Icon = styled(FontAwesome)`
  right: 10px;
  font-size: 20px;
`;
