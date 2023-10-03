import Location from "../../../../assets/location.png"


interface Values {
    img: string,
    title: string,
    location: string,
    badge: string,
    desc: string
}

const ForthSectionCard = (values: Values) => {
  return (
    <div className='forth-section-card'>
        <img src={values.img} alt="Card Image" />
        <div className="content">
            <h5 className='title'>{values.title}</h5>
            <div className='location-badge'>
                <div className="locate">
                    <img src={Location} alt="Location Icon" />
                    <h6>{values.location}</h6>
                </div>
                <div className={values.badge === "Full-Time" ? "full-time": values.badge === "Remote" ? "remote": "part-time"}>
                    {values.badge}
                </div>
            </div>
            <p className='description'>{values.desc}</p>
        </div>
    </div>
  )
}

export default ForthSectionCard