import { ButtonLink } from "@components/ButtonLink/ButtonLink";
import "../styles/CandidateModal.css";
import { Flex, Image, Modal, Progress, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { MatchWithDetails } from "../types";

const { Title, Text } = Typography;

interface ICandidateModalProps {
  isOpen: boolean;
  closeModal: () => void;
  candidate: MatchWithDetails;
}

export const CandidateModal = ({
  isOpen,
  closeModal,
  candidate,
}: ICandidateModalProps) => {
  const { t } = useTranslation();
  const { name, percentage, logoSrc, brandColor } = candidate;

  return (
    <Modal open={isOpen} onCancel={closeModal} footer={[]}>
      <Flex>
        <Flex vertical justify="flex-start" align="center">
          <Image
            preview={false}
            width={64}
            height={85}
            src={logoSrc}
            aria-hidden
            // TODO: Ant Design - Image background color
            style={{
              padding: "0.25rem",
              borderRadius: 4,
              backgroundColor: "var(--gray10)",
            }}
          />
          {/*<div
            className="candidate-modal__score-visual"
            aria-hidden
            style={{ width: `${percentage}%`, backgroundColor: brandColor }}
          ></div>*/}
          <Progress
            percent={percentage}
            strokeColor={brandColor}
            trailColor="transparent"
            size={4}
            status="normal"
            percentPosition={{ align: "center", type: "outer" }}
            showInfo={false}
          />
          <Text className="candidate-modal__score">{`${percentage}%`}</Text>
        </Flex>
        <Flex
          vertical
          align="flex-start"
          justify="flex-start"
          style={{ paddingLeft: 18 }}
          // className="candidate-modal__details-section"
        >
          <Title
            level={3}
            className="candidate-modal__name"
            style={{ margin: 0 }}
          >
            {name}
          </Title>
          <Text
            className="body-small"
            style={{ marginTop: 10, fontWeight: 700 }}
          >
            {t("candidate.number")} {candidate.number}
          </Text>
        </Flex>
      </Flex>
      <Flex
        vertical
        justify="flex-end"
        align="center"
        style={{ paddingTop: "2rem" }}
      >
        <ButtonLink
          to={`/candidates/${candidate.id}`}
          variant="outline"
          size="small"
        >
          {t("candidate.getToKnow")}
        </ButtonLink>
      </Flex>
    </Modal>
  );
};
