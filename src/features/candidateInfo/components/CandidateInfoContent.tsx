import { PromiseList } from "./PromiseList";
import { useCandidateInfo } from "../hooks/useCandidateInfo";
import { BackgroundDetailsGrid } from "./BackgroundDetailsGrid";
import { Card } from "antd";

export const CandidateInfoContent = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, promises, candidate } = props;

  return (
    <>
      {promises && (
        <Card title={t("candidateSections.electionPromises")} bordered={false}>
          <PromiseList items={promises} />
        </Card>
      )}
      {candidate && (
        <Card title={t("candidateSections.backgroundInfo")} bordered={false}>
          <BackgroundDetailsGrid t={t} candidate={candidate} />
        </Card>
      )}
    </>
  );
};
