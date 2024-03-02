import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {OtpFormProps} from '../types';


export const OtpForm: React.FC<OtpFormProps> = ({
    onSubmit,
    otpSize, 
    emptyAlertMsg,
    focusOnVisit=false,
    autoComplete=false,
    autoSubmit=false,
    focusColor="#0cc",
    notFocusColor="#ccc",
    focusBorderColor="#0e0e0e",
    notFocusBorderColor="#fff",
    textVisibility=false,
    selectionColor= "#fff",
    allStyles={
      otpHolderStyle:{
        flexDirection: 'row',
        marginHorizontal: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      inputTextStyle: {
        fontSize: 26,
        color: 'white',
        flex: 1,
        textAlign: 'center',
        fontWeight: '600',
      },
      inputHolderStyle: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderWidth: 1,
      },
      btnHolderStyle:{
        alignItems: 'center',
        justifyContent:'center',
        height: Platform.OS == 'android' ? 115 : 80,
        width: '100%',
      },
      btnStyle:{
        width: '50%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0fc',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
      },
      btninputTextStyle:{
        fontSize: 20,
        color: 'black'
      }
    },
}) => {
  const otpSchema = yup.object().shape({
    otp: yup
      .array()
      .of(yup.string().length(1).defined())
      .required(emptyAlertMsg),
  });
  const methods = useForm({
    resolver: yupResolver(otpSchema),
  });

  const {handleSubmit, control, setValue, getValues} = methods;
  const [focusedInput, setFocusedInput] = useState<any | number>(0);
  const otpFields = Array(otpSize).fill(null);
  const inputRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    const focusTimeout = setTimeout(() => {
      if (inputRefs.current) {
        focusOnVisit && inputRefs.current[0]?.focus();
      }
    }, 1000);

    return () => clearTimeout(focusTimeout);
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (index >= 0) {
        setValue(`otp.${index}`, value);
        if (value && index < otpSize - 1) {
        inputRefs.current[index + 1].focus();
        }
        else if (allDigitsFilled()  &&  autoSubmit) {
          handleSubmit(onSubmit)();
        }
    }
  };
  const allDigitsFilled = () => {
    const values = getValues('otp');
    return values.every((digit) => digit !== undefined && digit !== null && digit !== '');
  };
 
  const handleKeyPress = (event: any, index: number) => {
    const value = methods.getValues(`otp.${index}`);
    if (
      index > 0 &&
      (value == '' || value == null || value == undefined) &&
      event.key.toString() == 'Backspace'
    ) {
      inputRefs.current[index - 1].focus();
    } else if (event.key.toString() != 'Backspace') {
      setValue(`otp.${index}`, event.key.toString());
      if (index < otpSize - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };
  const handleFocus = (index: number) => {
    setFocusedInput(index);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  
  return (
    <FormProvider {...methods}>
        <KeyboardAwareScrollView>
        <View style={allStyles?.otpHolderStyle}>
      {otpFields.map((_, index) => (
        <Controller
          key={index}
          control={control}
          render={({field}:{field:any}) => (
            <View
              style={[
                allStyles?.inputHolderStyle,
                {
                  borderColor: `${
                    focusedInput == index ? focusBorderColor : notFocusBorderColor
                  }`,
                  backgroundColor: `${
                    focusedInput == index ? focusColor : notFocusColor
                  }`,
                },
              ]}>
              <TextInput
                style={allStyles?.inputTextStyle}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={({nativeEvent}) =>
                  handleKeyPress(nativeEvent, index)
                }
                onChangeText={value => handleInputChange(index, value)}
                onFocus={() => handleFocus(index)}
                autoComplete={autoComplete?"one-time-code":"off"}
                secureTextEntry={textVisibility}
                onBlur={handleBlur}
                value={field.value}
                ref={el => el && (inputRefs.current[index] = el)}
                selectionColor={selectionColor}
                // caretHidden={true}
              />
            </View>
          )}
          name={`otp.${index}`}
        />
      ))}
    </View>
    <View
          style={allStyles?.btnHolderStyle}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={allStyles?.btnStyle}>
            <Text style={allStyles?.btninputTextStyle}>Verify</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </FormProvider>
  
  );
};

const styles = StyleSheet.create({});
