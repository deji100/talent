interface Values {
    img: string,
    text: string
}

const FooterGetInTouch = (values: Values) => {
  return (
    <div className="get-in-touch">
        <img src={values.img} alt="Get In Touch Icon" />
        <p>{values.text}</p>
    </div>
  )
}

export default FooterGetInTouch