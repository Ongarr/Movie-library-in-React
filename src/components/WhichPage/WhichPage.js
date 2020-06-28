import React from "react";
import { P } from "./WhichPageStyle";

const WhichPage = (props) => {
  return <P className="current-page">{props.pageInfoText}</P>;
};

export default WhichPage;
