import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Values {
    question: string;
    answer: string
}
const ServicesSectionSixCard = (values: Values) => {
  return (
    <div className='services-section-six-card'>
        <p className='question'>{values.question} <ExpandMoreIcon className="drop" /></p>
    </div>
  )
}

export default ServicesSectionSixCard