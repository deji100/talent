interface Value {
  desc?: string
}

const HeroDescription = (value: Value) => {
  return (
      <p className='desc'>{value.desc}</p>
  )
}

export default HeroDescription