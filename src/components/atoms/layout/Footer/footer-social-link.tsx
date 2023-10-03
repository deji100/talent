import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface FooterSocial {
  link: string,
  icon: ReactNode,
}
const FooterSocialLink = (values: FooterSocial) => {
  return (
    <Link to={values.link}>
      {values.icon}
    </Link>
  )
}

export default FooterSocialLink