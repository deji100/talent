interface Value {
    title: string
}
const SectionTwoTitle = (value: Value) => {
  return (
    <h4 className='section-two-title'>{value.title}</h4>
  )
}

export default SectionTwoTitle