import React, {useCallback, useState, useRef} from 'react';
import {
  Container,
  AreaLogin,
  Title,
  InputOrange,
  Image,
  AreaButtonSignIn,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.jpg';
import ButtonRegister from '../../components/ButtonRegister';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {useAuth} from '../../hooks/auth';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationError';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {FormHandles} from '@unform/core';
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const {signIn} = useAuth();
  const passwordInputRef = useRef<TextInput>(null);
  const [passwordView, setPasswordView] = useState(true);
  interface SignInFormData {
    email: string;
    password: string;
  }

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });
        Alert.alert('Seja bem vindo(a)', 'Incca Sistemas');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [signIn],
  );
  const handlePasswordView = useCallback((securtyStateParam) => {
    setPasswordView(!securtyStateParam);
  }, []);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <Container>
        <Image source={logoImg} resizeMode="contain" />
        <AreaLogin>
          <View>
            <Title>Login</Title>
          </View>
          <InputOrange />
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              iconLeft="user"
              returnKeyType="next"
              placeholder="E-mail"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              iconLeft="lock"
              placeholder="Senha"
              secureTextEntry={passwordView}
              returnKeyType="send"
              iconRight={passwordView ? 'eye-slash' : 'eye'}
              functionOnPress={() => handlePasswordView(passwordView)}
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}>
              Entrar
            </Button>
          </Form>
        </AreaLogin>
        <AreaButtonSignIn>
          <ButtonRegister onPress={() => navigation.navigate('SignUp')}>
            Ainda não possui cadastro? Entre aqui
          </ButtonRegister>
        </AreaButtonSignIn>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
