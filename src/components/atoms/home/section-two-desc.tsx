interface Value {
    desc?: string
}
const SectionTwoDesc = (value: Value) => {
  return (
    <p className='section-two-desc'>{value.desc}</p>
  )
}

export default SectionTwoDesc