import { ReactNode } from "react";

interface Value {
  desc: ReactNode;
}
const TalentPrivacy = (value: Value) => {
  return <>{value.desc}</>;
};

export default TalentPrivacy;
