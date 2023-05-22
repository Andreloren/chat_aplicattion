/* eslint-disable @typescript-eslint/no-explicit-any */
import MaskedInput from "react-text-mask";

const regexName = /[A-Z][a-z]* [A-Z][a-z]*/;

// eslint-disable-next-line no-useless-escape
const regexCpf = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;

const MaskCpf = (props: any) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /[0-9]/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
    />
  );
};

export { MaskCpf, regexName, regexCpf };
