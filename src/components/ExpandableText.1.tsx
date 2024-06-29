import React, { useState } from "react";
import { Props } from "./ExpandableText";

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  return <div>ExpandableText</div>;
};
