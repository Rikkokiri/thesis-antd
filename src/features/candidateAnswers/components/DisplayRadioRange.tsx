import { QuestionType } from "@data/types";
import "../styles/DisplayRadioRange.css";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { useTranslation } from "react-i18next";
import { CandidateIndicator } from "./CandidateIndicator";
import { Radio } from "antd";

interface IDisplayRadioOption {
  value: number;
  label: string;
  isChecked?: boolean;
  optionClassName?: string;
  indicatorClassName?: string;
  indicatorImgSrc?: string;
}

interface IDisplayRadioRangeProps {
  options: IDisplayRadioOption[];
  userAnswer: number | null;
  candidateAnswer: number | null;
  isReadonly?: boolean;
}

export const DisplayRadioRange = (props: IDisplayRadioRangeProps) => {
  const { t } = useTranslation();
  const { userAnswer, candidateAnswer } = props;

  return (
    <div className="radio-display">
      {props.options.map((option) => {
        const optionClass = option.optionClassName ?? "";

        return (
          <div
            className={`radio-display__option ${optionClass} ${option.indicatorClassName}`}
            key={`radio-option-${option.value}`}
          >
            {candidateAnswer === option.value && (
              <CandidateIndicator
                className="candidate-indicator"
                imgSrc={option.indicatorImgSrc ?? ""}
                alt={""} // TODO: Meaningful alt text
              />
            )}
            <Radio
              style={{ position: "relative" }}
              value={option.value}
              checked={option.isChecked}
              className={`${props.isReadonly ? "readonly" : ""}`}
            >
              {option.label}
            </Radio>
            {userAnswer === option.value && (
              <SmallSpeechBubble
                content={t("question.yourAnswer")}
                answer={userAnswer}
                questionType={QuestionType.AGREE_SCALE}
                className="user-answer-bubble"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
