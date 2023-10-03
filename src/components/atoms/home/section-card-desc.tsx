interface Value {
    desc: string
}

const SectionCardDesc = (value: Value) => {
  return (
    <p className='section-card-desc'>{value.desc}</p>
  )
}

export default SectionCardDesc