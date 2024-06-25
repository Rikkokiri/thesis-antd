import { FiInfo } from "react-icons/fi";
import { LocalizedString } from "@data/types";
import { TFunction } from "i18next";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { useState } from "react";
import { Modal, Typography } from "antd";

const { Title, Text } = Typography;

interface IAdditionalInfoProps {
  t: TFunction;
  info: LocalizedString;
}

export const AdditionalInfo = (props: IAdditionalInfoProps) => {
  const { t, info } = props;
  const { localize } = useLocalizedString();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ToggleButton
        isToggled={isModalOpen}
        onClick={() => setIsModalOpen(true)}
        untoggledIcon={<FiInfo />}
        toggledIcon={<FiInfo />}
        size="middle"
        toggledClassName=""
      >
        {t("question.whatAbout")}
      </ToggleButton>
      <Modal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={[]}
      >
        <Title level={3} style={{ paddingBottom: 8, margin: 0 }}>
          {t("question.whatAbout")}
        </Title>
        <Text style={{ fontSize: "0.875rem", lineHeight: 1.5 }}>
          {localize(info)}
        </Text>
      </Modal>
    </>
  );
};
