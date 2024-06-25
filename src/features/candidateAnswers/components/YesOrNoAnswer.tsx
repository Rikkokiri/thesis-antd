import "../styles/YesOrNoAnswer.css";
import { TFunction } from "i18next";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { Flex } from "antd";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { YesNoAnswer, QuestionType } from "@data/types";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { CandidateIndicator } from "./CandidateIndicator";

interface IYesNoAnswerProps {
  t: TFunction;
  questionId: number;
  candidateAnswer: number | null;
  userAnswer: number | null;
  candidateImgSrc: string;
}

type AnswerOption = {
  value: YesNoAnswer;
  label: string;
};

export const YesOrNoAnswer = (props: IYesNoAnswerProps) => {
  const { t, userAnswer, candidateAnswer, candidateImgSrc } = props;
  const options: AnswerOption[] = [
    {
      value: YesNoAnswer.YES,
      label: t("question.yes"),
    },
    {
      value: YesNoAnswer.NO,
      label: t("question.no"),
    },
  ];

  return (
    <Flex
      align="flex-end"
      justify="center"
      gap="1.5rem"
      style={{ width: "100%", position: "relative" }}
      className="yes-or-no-answer__container"
    >
      {options.map((option) => {
        const isToggled = candidateAnswer === option.value;

        return (
          <div className="yes-or-no-answer__option" key={option.value}>
            <ToggleButton
              disabled={true}
              isToggled={isToggled}
              classNames={{
                icon: "icon-20",
              }}
              toggledIcon={
                <CandidateIndicator
                  alt={""} // TODO: Pass a meaningful alt text
                  imgSrc={candidateImgSrc}
                />
              }
              // iconSize={isToggled ? 24 : undefined}
              untoggledIcon={
                option.value === YesNoAnswer.YES ? (
                  <RiThumbUpLine />
                ) : (
                  <RiThumbDownLine />
                )
              }
            >
              {option.label}
            </ToggleButton>
            {userAnswer === option.value && (
              <SmallSpeechBubble
                content={t("question.yourAnswer")}
                answer={userAnswer}
                questionType={QuestionType.YES_NO}
                className="user-answer-bubble"
              />
            )}
          </div>
        );
      })}
    </Flex>
  );
};
