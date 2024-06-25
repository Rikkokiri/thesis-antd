import { Flex, FlexProps } from "antd";
import * as React from "react";

interface FlexPropsWithStyles extends FlexProps {
  style?: React.CSSProperties;
}

export const PageSectionsColumn = ({ style, ...rest }: FlexPropsWithStyles) => {
  return (
    <Flex
      vertical
      gap={"1.5rem"}
      style={{ maxWidth: "680px", width: "100%", ...style }}
      {...rest}
    />
  );
};

export const RowCentered = ({ style, ...rest }: FlexPropsWithStyles) => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ width: "100%", ...style }}
      {...rest}
    />
  );
};
