import "../styles/CandidateHeader.css";
import { useCandidateInfo } from "../hooks/useCandidateInfo";
import { Typography } from "antd";

const { Title } = Typography;

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <div className="candidate-header">
      <div>
        <p className="subtitle m-0">{t("electionName")}</p>
        <Title level={1} style={{ fontSize: "32px" }}>
          {candidate.name}
        </Title>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <p className="candidate-header__organization m-0">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </p>
        ))}
      <div className="candidate-number">
        {t("candidate.number")} {candidate.number}
      </div>
    </div>
  );
};
