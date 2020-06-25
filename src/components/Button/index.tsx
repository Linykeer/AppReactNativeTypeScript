import React from 'react';
import {Container, ButtonText, Icon} from './styles';
import {RectButtonProperties} from 'react-native-gesture-handler';
interface ButtonProps extends RectButtonProperties {
  children: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({children, icon, ...rest}) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
