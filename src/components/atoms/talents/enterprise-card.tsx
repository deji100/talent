interface Value {
  desc: string;
}
const EnterpriseCard = (value: Value) => {
  return (
    <div className="enterprise-card">
      <p className="desc">{value.desc}</p>
    </div>
  );
};

export default EnterpriseCard;
