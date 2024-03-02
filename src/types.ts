import React from "react";
import * as yup from 'yup';

export type OtpFormProps = {
    setOtp: React.Dispatch<React.SetStateAction<string>>;
    otpSize: number;
    EmptyAlertMsg: string;
    focusOnVisit?: boolean;
    autoComplete?: boolean;
    focusColor?: string;
    notFocusColor?: string;
    focusBorderColor?: string;
    notFocusBorderColor?: string;
    textVisibility?: boolean;
    selectionColor?: string;
    allStyles?: any;
  };