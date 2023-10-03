import { ReactNode } from "react";

interface Value {
  title: ReactNode;
}

const TalentHeader = (value: Value) => {
  return <>{value.title}</>;
};

export default TalentHeader;
