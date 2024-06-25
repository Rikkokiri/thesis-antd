import { Radio, RadioChangeEvent } from "antd";
import "./RadioRange.css";

interface RadioOption {
  value: number;
  label: string;
  optionClassName?: string;
}

interface RadioRangeProps {
  options: RadioOption[];
  value: number | undefined;
  onChange: (value: number) => void;
  isReadonly?: boolean;
}

export const RadioRange = (props: RadioRangeProps) => {
  return (
    <Radio.Group
      className="radio-range"
      value={props.value}
      onChange={(e: RadioChangeEvent) => props.onChange(e.target.value)}
    >
      {props.options.map((option) => (
        <Radio
          className={`radio-range__option ${option.optionClassName ?? ""}`}
          key={`radio-option-${option.value}`}
          value={option.value}
        >
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};
