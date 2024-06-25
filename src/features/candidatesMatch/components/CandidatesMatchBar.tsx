import "../styles/CandidatesMatchBar.css";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { MatchButton } from "./MatchButton";
import { useCandidatesMatch } from "../hooks/useCandidatesMatch";
import { MatchWithDetails } from "../types";
import { ColumnCentered } from "@layout/index";

export const CandidatesMatchBar = (
  props: ReturnType<typeof useCandidatesMatch>,
) => {
  const { topFourCandidates, topCount, displayMatches } = props;
  const [resultsHidden, setResultsHidden] = useState<boolean>(false);

  if (!displayMatches) {
    return null;
  }

  return (
    <header className="match-bar">
      <div className="match-bar__content">
        <div className="match-bar__matches">
          {resultsHidden || !topFourCandidates
            ? [...Array(topCount).keys()].map((index) => (
                <MatchPlaceholder key={index} />
              ))
            : topFourCandidates.map((candidate: MatchWithDetails) => (
                <MatchButton candidate={candidate} key={candidate.id} />
              ))}
        </div>
        <ToggleButton
          classNames={{
            icon: "icon-24",
          }}
          isToggled={resultsHidden}
          onClick={() => setResultsHidden(!resultsHidden)}
          untoggledIcon={<FiEye />}
          toggledIcon={<FiEyeOff />}
          className="match-bar__toggle"
          type="text"
          style={{ borderRadius: "4px" }}
          toggleStyle="hoverless"
        />
      </div>
    </header>
  );
};

const MatchPlaceholder = () => {
  return (
    <ColumnCentered
      style={{ width: "2rem", justifyContent: "space-between", height: "100%" }}
    >
      <div className="placeholder-candidate"></div>
      <div className="placeholder-score"></div>
    </ColumnCentered>
  );
};
