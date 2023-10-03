interface Value {
  title: string
}

const HeroTitle = (value: Value) => {
  return (
      <h1 className='title'>{value.title}</h1>
  )
}

export default HeroTitle