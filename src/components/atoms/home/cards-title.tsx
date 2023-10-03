interface Value {
    title: string
}

const CardsTitle = (value: Value) => {
  return (
    <h5 className='cards-title'>{value.title}</h5>
  )
}

export default CardsTitle