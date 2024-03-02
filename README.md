# React Native OTP Form

## Overview

This npm package provides a customizable and easy-to-use React Native OTP (One-Time Password) input form. It leverages the `react-hook-form` library for form management and validation, offering a seamless experience for users entering OTP.

## Installation

To install the package, use the following npm command:

```bash
npm install react-native-otp-form
```

## Usage

```jsx
import { OtpForm } from 'react-native-otp-form';

// Your React component
const MyComponent = () => {
  const handleOtpVerification = data => {
    // Handle OTP verification logic here
    console.log('Entered OTP:', data.otp);
  };

  return (
    <OtpForm
      onSubmit={handleOtpVerification}
      otpSize={6} // Set the desired OTP length
      emptyAlertMsg="Please enter the OTP"
      // Add other customization props as needed
    />
  );
};

export default MyComponent;
```

## Props

### `onSubmit` (Function, required)

A callback function that receives the entered OTP for further processing.

### `otpSize` (Number, required)

The length of the OTP.

### `emptyAlertMsg` (String, required)

The alert message to be displayed if the OTP is not entered.

### `focusOnVisit` (Boolean, optional) | initial false

Whether to focus on the first input field when the component mounts.

### `autoComplete` (Boolean, optional) |  initial false  

Whether to enable auto completion.

###  `autoSubmit` (Boolean, optional) | initial false

Whether to automatically submit the OTP.

### `focusColor` (String, optional) |  initial #0cc

The color of the focused input field.

### `notFocusColor` (String, optional) | initial #ccc

The color of the unfocused input field.

### `focusBorderColor` (String, optional) | initial #0e0e0e

The border color of the focused input field.

### `notFocusBorderColor` (String, optional) | initial #fff

The border color of the unfocused input field.

### `textVisibility` (Boolean, optional)  | initial false

Whether to hide the input text.

### `selectionColor` (String, optional) | initial #fff

The color of the cursor.

### `allStyles` (Object, optional)

Custom styles to be applied to the component.

initial allStyles
```
allStyles = {
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
}
```

## Example

```jsx
<OtpForm
  onSubmit={handleOtpVerification}
  otpSize={6}
  emptyAlertMsg="Please enter the OTP"
  focusOnVisit={true}
  autoComplete={false}
  autoSubmit={false}
  focusColor="#0cc"
  notFocusColor="#ccc"
  focusBorderColor="#0e0e0e"
  notFocusBorderColor="#fff"
  textVisibility={false}
  selectionColor="#fff"
  allStyles = {
    otpHolderStyle:{
      ...// for otp input container
    },
    inputTextStyle: {
      ...// for input text
    },
    inputHolderStyle: {
     ...// for single input holder
    },
    btnHolderStyle:{
      ...// for button container
    },
    btnStyle:{
      ...// for button
    },
    btninputTextStyle:{
      ...// for button text
    }
  }
/>
```

Feel free to customize the styles and behavior based on your application's requirements.

## License

This package is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.