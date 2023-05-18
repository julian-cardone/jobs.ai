import { useEffect, useState } from "react";

function CoverLetter() {

  // const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(()=>{
    
  }, []);

  return (
    <>
      <div className="container-lg my-5 pt-5">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Default file input example
              </label>
              <input class="form-control" type="file" id="formFile" onChange={(e)=> setSelectedFile(e.target.files[0])}/>
            </div>
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
