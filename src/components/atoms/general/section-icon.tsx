interface Value {
  icon: string,
}
const SectionIcon = (value: Value) => {
  return (
     <img className='section-icon' src={value.icon} alt="Third Section Icon" />
  )
}

export default SectionIcon