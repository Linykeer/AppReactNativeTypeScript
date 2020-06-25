import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
`;
export const Icon = styled(Feather)`
  font-size: 35px;
`;
export const Button = styled(RectButton)`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  right: 10px;
`;
export const ViewHeader = styled.View`
  padding: 24px;
  background: #ff8c00;
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const Username = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Medium';
`;

export const ViewList = styled.View`
  justify-content: center;
  padding: 20px;
`;
export const ListName = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
`;
export const ListEmail = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;
export const ListCategory = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;
export const ViewName = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #ff8c00;
`;
export const ViewEmail = styled.View`
  align-items: center;
  border-radius: 12px;
  background: #ff8c00;
`;
export const ViewCategory = styled.View`
  align-items: center;
  border-radius: 12px;
  background: #ff8c00;
`;
