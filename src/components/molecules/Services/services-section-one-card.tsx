import Badge from "../../../assets/badge2.png"

interface Values {
  title: string,
  desc: string
}
const ServicesSectionOneCard = (values: Values) => {
  return (
    <div className='services-section-one-card'>
      <div className='img-title'>
        <img src={Badge} alt="" />
        <h6>{values.title}</h6>
      </div>
      <p>{values.desc}</p>
    </div>
  )
}

export default ServicesSectionOneCard