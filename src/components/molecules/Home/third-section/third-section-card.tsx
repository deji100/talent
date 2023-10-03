import SectionIcon from '../../../atoms/general/section-icon'
import SectionCardTitle from '../../../atoms/general/section-card-title'
import HeroDescription from '../../../atoms/general/hero-desc'

interface Values {
    icon: string,
    title: string,
    desc: string
}

const ThirdSectionCard = (values: Values) => {
  return (
    <div className='third-section-card'>
        <SectionIcon icon={values.icon} />
        <SectionCardTitle title={values.title} />
        <HeroDescription desc={values.desc} />
    </div>
  )
}

export default ThirdSectionCard