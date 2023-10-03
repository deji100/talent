interface Value {
    title: string
}
const SectionONe = (value: Value) => {
  return (
    <h6 className='section-title four'>{value.title}</h6>
  )
}

export default SectionONe