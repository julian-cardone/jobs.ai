import { useContext } from "react";
import { ClContext } from "../../App";

function CoverLetterGenerate() {

  const clContext = useContext(ClContext);
  const name = clContext[0]?.name || "none";

  return (
    <>
      <div className="container-lg my-5 pt-5">
        <div className="row mx-5 justify-content-between">
          <div className="col-sm-6 col-md-6 col-lg-4"><p>Selected Cover Letter: {name}</p></div>
        </div>
      </div>
    </>
  );
}

export default CoverLetterGenerate;
