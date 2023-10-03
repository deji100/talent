interface Value {
    title: string
}

const SectionCardTitle = (value: Value) => {
  return (
    <h6 className='section-card-title'>{value.title}</h6>
  )
}

export default SectionCardTitle