import Vision from "../../../assets/eye.png";
import Mission from "../../../assets/target.png";
import Values from "../../../assets/diamond.png";

const SectionTwoContainer = () => {
  return (
    <div className="section-two-container">
      <div className="ul">
        <div className="vision vmv">
          <div className="image v">
            <img src={Vision} alt="image vision" />
          </div>

          <h2 className="vmv-h2">Vision</h2>

          <p className="vmv-desc">
            Our vision at AmorServ Talents is to empower dreams and enrich
            futures. Through our dedication to exceptional talent, we aim to
            simplify hiring process through sourcing for vetted remote talents
            in Africa.
          </p>
        </div>

        <div className="mission vmv">
          <div className="image">
            <img src={Mission} alt="image mission" />
          </div>

          <h2 className="vmv-h2">Mission</h2>

          <p className="vmv-desc">
            Our mission is to transform the way companies hire remote talent. It
            a waste of resources and time for companies to hire unqualified
            remote talents. We strive to make available to businesses,
            pre-vetted tech talents.
          </p>
        </div>

        <div className="value vmv">
          <div className="image">
            <img src={Values} alt="image value" />
          </div>

          <h2 className="vmv-h2">Values</h2>

          <p className="vmv-desc">
            Our core values center around excellence, integrity, empowerment,
            collaboration, and innovation. These values propels us toward a
            future where talent and opportunity seamlessly intertwine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwoContainer;
