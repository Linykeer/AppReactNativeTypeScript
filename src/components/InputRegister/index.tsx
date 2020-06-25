import {Container, TextInput} from './styles';
import {TextInputProps} from 'react-native';
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
} from 'react';
import {useField} from '@unform/core';
interface InputProps extends TextInputProps {
  name: string;
}
interface inputValueReference {
  value: string;
}
interface InputRef {
  focus(): void;
}
const InputRegister: React.RefForwardingComponent<{}, InputProps> = (
  {name, ...rest},
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef<inputValueReference>({value: defaultValue});
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

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
      <TextInput
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};
export default forwardRef(InputRegister);
