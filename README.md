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
  const handleOtpVerification = otp => {
    // Handle OTP verification logic here
    console.log('Entered OTP:', otp);
  };

  return (
    <OtpForm
      setOtp={handleOtpVerification}
      otpSize={6} // Set the desired OTP length
      EmptyAlertMsg="Please enter the OTP"
      // Add other customization props as needed
    />
  );
};

export default MyComponent;
```

## Props

### `setOtp` (Function, required)

A callback function that receives the entered OTP for further processing.

### `otpSize` (Number, required)

The length of the OTP.

### `EmptyAlertMsg` (String, required)

The alert message to be displayed if the OTP is not entered.

### Other Customization Props

- `focusOnVisit`
- `autoComplete`
- `focusColor`
- `notFocusColor`
- `focusBorderColor`
- `notFocusBorderColor`
- `textVisibility`
- `selectionColor`
- `allStyles`

## Example

```jsx
<OtpForm
  setOtp={handleOtpVerification}
  otpSize={6}
  EmptyAlertMsg="Please enter the OTP"
  focusOnVisit={true}
  autoComplete={false}
  focusColor="#0cc"
  notFocusColor="#ccc"
  focusBorderColor="#0e0e0e"
  notFocusBorderColor="#fff"
  textVisibility={false}
  selectionColor="#fff"
  // Add your custom styles using the 'allStyles' prop
/>
```

```
allStyles = {
  otpHolderStyle:{
    ...// for otp input container
  },
  textStyle: {
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
  btnTextStyle:{
    ...// for button text
  }
}
```


Feel free to customize the styles and behavior based on your application's requirements.

## License

This package is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.