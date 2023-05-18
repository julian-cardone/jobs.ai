import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newCoverLetter } from "../../store/coverLetter";

function CoverLetter() {

  // const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    let files = e.target.files

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload= (e) =>{
      console.warn("data ", e.target.result);

      const formData={file:e.target.result}
      dispatch(newCoverLetter(formData));
    }

  }

  return (
    <>
      <div className="container-lg my-5 pt-5">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <form class="mb-3">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" id="formFile" onChange={(e)=> handleSubmit(e)}/>
              {/* <input type="submit"></input> */}
            </form>
          </div>
          {/* <div className="col-sm-4 col-lg-3">
            <div className="p-5 bg-primary text-light">col 2</div>
          </div>
          <div className="col-sm-4 col-lg-3">
            <div className="p-5 bg-primary text-light">col 3</div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default CoverLetter;
