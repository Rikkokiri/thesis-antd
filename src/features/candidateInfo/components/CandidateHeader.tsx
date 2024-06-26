import { useCandidateInfo } from "../hooks/useCandidateInfo";
import { Flex, Typography, FlexProps } from "antd";

const { Paragraph, Text, Title } = Typography;

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <CandidateHeader>
      <div>
        {/* Using <Text> component rendered <span> that did not match height correctly */}
        <Paragraph className="subtitle" style={{ margin: 0 }}>
          {t("electionName")}
        </Paragraph>
        <Title level={1} className="heading-xxl">
          {candidate.name}
        </Title>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <Text className="bold-label">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </Text>
        ))}
      <CandidateNumber>
        {t("candidate.number")} {candidate.number}
      </CandidateNumber>
    </CandidateHeader>
  );
};

export const CandidateHeader = (props: FlexProps) => {
  const headerStyles: React.CSSProperties = {
    background: "var(--card-bg)",
    width: "100%",
    marginBottom: "3rem",
    gap: "1rem",
    textAlign: "center",
    padding: "1.5rem",
  };

  return (
    <Flex justify="center" vertical style={headerStyles} {...props}></Flex>
  );
};

export const CandidateNumber = (props: FlexProps) => {
  const numberStyles: React.CSSProperties = {
    fontSize: "1.25rem",
    lineHeight: 1.5,
    fontWeight: 700,
    borderRadius: "50%",
    border: "1px solid var(--primary)",
    width: "7.75rem",
    height: "7.75rem",
    margin: "1rem auto",
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={numberStyles}
      {...props}
    ></Flex>
  );
};
