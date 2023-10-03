interface Value {
  title: string;
}
const SectionTitle = (value: Value) => {
  return <h4 className="section-title">{value.title}</h4>;
};

export default SectionTitle;
