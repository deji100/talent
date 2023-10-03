import SectionCardTitle from '../../../atoms/home/section-card-title'
import SectionCardDesc from '../../../atoms/home/section-card-desc'
import SectionCardImage from '../../../atoms/home/section-card-image'

interface Values {
    img: string,
    title: string,
    desc: string
}


const SectionCard = (values: Values) => {
  return (
    <div className='section-card'>
        <SectionCardImage img={values.img} />
        <div className='card-title-desc'>
            <SectionCardTitle title={values.title} />
            <SectionCardDesc desc={values.desc} />
        </div>
    </div>
  )
}

export default SectionCard