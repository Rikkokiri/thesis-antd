import { Flex, FlexProps } from "antd";

export const PageSectionsColumn = ({ style, ...rest }: FlexProps) => {
  return (
    <Flex
      vertical
      gap={6}
      style={{ maxWidth: "680px", width: "100%", ...style }}
      {...rest}
    />
  );
};

export const RowCentered = ({ style, ...rest }: FlexProps) => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ width: "100%", ...style }}
      {...rest}
    />
  );
};
