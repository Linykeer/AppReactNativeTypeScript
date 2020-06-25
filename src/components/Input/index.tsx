import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import {Container, TextInput, Icon, IconRight} from './styles';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';
import {ref, Ref} from 'yup';
interface InputProps extends TextInputProps {
  name: string;
  iconLeft: string;
  iconRight?: string;
  functionOnPress?: any;
}
interface inputValueReference {
  value: string;
}
interface InputRef {
  focus(): void;
}
const Input: React.RefForwardingComponent<{}, InputProps> = (
  {name, iconLeft, iconRight, functionOnPress, ...rest},
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef<inputValueReference>({value: defaultValue});
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={iconLeft}
        size={20}
        color={isFocused || isFilled ? '#ff8c00' : '#a9a9a9'}
      />
      <TextInput
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      {iconRight && (
        <IconRight name={iconRight} size={20} onPress={functionOnPress} />
      )}
    </Container>
  );
};
export default forwardRef(Input);
