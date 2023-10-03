import TextField from "@mui/material/TextField";

interface Values {
  desc: string;
  title: string;
}

const ServicesSectionFiveForm = (values: Values) => {
  return (
    <div className="form-head">
      <div className="content">
        <p>{values.desc}</p>
        <h5>{values.title}</h5>
      </div>
      <form>
        <TextField
          id="standard-basic"
          sx={{
            color: "#fff",
            outline: "none",
            border: "none",
            borderBottom: "1px solid #fff",
          }}
          className="MuiFormLabel-root"
          InputProps={{
            style: {
              color: "#fff",
            },
          }}
          label="What is your name? *"
          variant="standard"
        />
        <div className="phone-email">
          <TextField
            id="standard-basic"
            sx={{
              color: "#fff",
              outline: "none",
              border: "none",
              width: "300px",
              borderBottom: "1px solid #fff",
            }}
            className="MuiFormLabel-root"
            InputProps={{
              style: {
                color: "#fff",
              },
            }}
            label="What is your phone number?"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            sx={{
              color: "#fff",
              outline: "none",
              border: "none",
              width: "300px",
              borderBottom: "1px solid #fff",
            }}
            className="MuiFormLabel-root"
            InputProps={{
              style: {
                color: "#fff",
              },
            }}
            label="Email *"
            variant="standard"
          />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Write your message here"
        ></textarea>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default ServicesSectionFiveForm;
