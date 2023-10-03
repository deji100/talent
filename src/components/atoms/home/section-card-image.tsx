interface Value {
    img: string
}
const SectionCardImage = (value: Value) => {
  return (
    <img className='section-card-img' src={value.img} alt="Section Card Image" />
  )
}

export default SectionCardImage