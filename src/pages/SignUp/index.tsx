import React, {useState, useRef, useCallback} from 'react';
import {
  Container,
  AreaLogin,
  Title,
  InputOrange,
  AreaButtonSignIn,
  AreaCircle,
  ViewIconCircle,
  IconCircle,
  IconCircleFull,
  AreaInput,
  TextCircle,
  AreaCircleText,
  TextNiveis,
  TextRegister,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import ButtonRegister from '../../components/ButtonRegister';
import Button from '../../components/Button';
import * as Yup from 'yup';
import InputRegister from '../../components/InputRegister';
import {ScrollView, Platform, Text, TextInput, Alert} from 'react-native';
import {Form} from '@unform/mobile';
import getValidationErrors from '../../utils/getValidationError';
import {FormHandles} from '@unform/core';
import api from '../../services/api';
interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface DataApi {
  name: string;
  email: string;
  password: string;
  category: string;
}
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailTextInput = useRef<TextInput>(null);
  const senhaTextInput = useRef<TextInput>(null);

  const [typeCategory, setTypeCategory] = useState('');
  const [typeBasico, setTypeBasico] = useState(false);
  const [typeIntermediario, setTypeIntermediario] = useState(false);
  const [typeAvancado, setTypeAvancado] = useState(false);

  const typeSelectBasico = useCallback((useBasico) => {
    setTypeCategory('Básico');
    setTypeBasico(!useBasico);
    setTypeIntermediario(false);
    setTypeAvancado(false);
  }, []);

  const typeSelectIntermediario = useCallback((useIntermediario) => {
    setTypeCategory('Intermediario');
    setTypeIntermediario(!useIntermediario);
    setTypeBasico(false);
    setTypeAvancado(false);
  }, []);

  const typeSelectAvancado = useCallback((useAvancado) => {
    setTypeCategory('Avançado');
    setTypeAvancado(!useAvancado);
    setTypeIntermediario(false);
    setTypeBasico(false);
  }, []);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().min(6, 'No minimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const newData: DataApi = {
          name: data.name,
          email: data.email,
          password: data.password,
          category: typeCategory,
        };
        console.log(newData);
        await api.post('/users', newData);
        Alert.alert(
          'Cadastro Realizado com Sucesso',
          'Você ja pode realizar login na aplicação',
        );
        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no Cadastro',
          'Ocorreu um erro ao fazer cadastro, Tente Novamente.',
        );
      }
    },
    [navigation, typeCategory],
  );
  return (
    <ScrollView>
      <Container>
        <AreaLogin>
          <Title>Cadastrar</Title>
          <InputOrange />
          <Form ref={formRef} onSubmit={handleSignUp}>
            <AreaInput>
              <InputRegister
                autoCapitalize="words"
                name="name"
                placeholder="Nome:"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailTextInput.current?.focus();
                }}
              />
              <InputRegister
                ref={emailTextInput}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                placeholder="E-mail:"
                returnKeyType="next"
                onSubmitEditing={() => {
                  senhaTextInput.current?.focus();
                }}
              />
              <InputRegister
                ref={senhaTextInput}
                name="password"
                placeholder="Senha:"
                textContentType="newPassword"
              />
              <AreaCircleText>
                <TextNiveis>Qual seu nivel de conhecimento?</TextNiveis>
                <AreaCircle>
                  <ViewIconCircle>
                    {typeBasico ? (
                      <IconCircleFull
                        name="circle"
                        style={{fontSize: 20}}
                        onPress={() => {
                          typeSelectBasico(typeBasico);
                        }}
                      />
                    ) : (
                      <IconCircle
                        name="circle"
                        style={{fontSize: 20}}
                        onPress={() => {
                          typeSelectBasico(typeBasico);
                        }}
                      />
                    )}
                    <TextCircle>Basico</TextCircle>
                  </ViewIconCircle>
                  <ViewIconCircle>
                    {typeIntermediario ? (
                      <IconCircleFull
                        name="circle"
                        style={{fontSize: 20}}
                        onPress={() => {
                          typeSelectIntermediario(typeIntermediario);
                        }}
                      />
                    ) : (
                      <IconCircle
                        name="circle"
                        style={{fontSize: 20}}
                        onPress={() => {
                          typeSelectIntermediario(typeIntermediario);
                        }}
                      />
                    )}
                    <TextCircle>Intermediario</TextCircle>
                  </ViewIconCircle>
                  <ViewIconCircle>
                    {typeAvancado ? (
                      <IconCircleFull
                        name="circle"
                        style={{fontSize: 20}}
                        onPress={() => {
                          typeSelectAvancado(typeAvancado);
                        }}
                      />
                    ) : (
                      <IconCircle
                        name="circle"
                        style={{fontSize: 20}}
                        onPress={() => {
                          typeSelectAvancado(typeAvancado);
                        }}
                      />
                    )}
                    <TextCircle>Avançado</TextCircle>
                  </ViewIconCircle>
                </AreaCircle>
              </AreaCircleText>
            </AreaInput>
            <Button
              style={{bottom: 70}}
              onPress={() => {
                formRef.current?.submitForm();
              }}>
              Cadastrar
            </Button>
          </Form>
        </AreaLogin>

        <AreaButtonSignIn>
          <ButtonRegister
            icon="chevron-left"
            onPress={() => navigation.goBack()}>
            Voltar para o Login
          </ButtonRegister>
        </AreaButtonSignIn>
      </Container>
    </ScrollView>
  );
};

export default SignUp;
