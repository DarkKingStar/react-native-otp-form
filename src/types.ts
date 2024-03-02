export type allStylesProps={
  otpHolderStyle: any,
  inputTextStyle:  any,
  inputHolderStyle: any,
  btnHolderStyle:any
  btnStyle: any,
  btninputTextStyle:any
};

export type OtpFormProps = {
    onSubmit: (data: any)=>{};
    otpSize: number;
    emptyAlertMsg: string;
    focusOnVisit?: boolean;
    autoComplete?: boolean;
    autoSubmit?: boolean;
    focusColor?: string;
    notFocusColor?: string;
    focusBorderColor?: string;
    notFocusBorderColor?: string;
    textVisibility?: boolean;
    selectionColor?: string;
    allStyles?: allStylesProps;
  };