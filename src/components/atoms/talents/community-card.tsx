interface Values {
    title: string,
    desc: string
}
const CommunityCard = (values: Values) => {
  return (
    <div className='community-card'>
        <h4 className='comm-title'>{values.title}</h4>
        <p className='comm-desc'>{values.desc}</p>
    </div>
  )
}

export default CommunityCard