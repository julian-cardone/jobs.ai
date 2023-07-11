import { useContext } from "react";
import { ClContext } from "../../App";
import TextInput from "./TextInput";
import Generate from "./Generate";

function CoverLetterGenerate() {
  const clContext = useContext(ClContext);
  const name = clContext[0]?.name || "none";
  const file = clContext[0]?.file || "";

  return (
    <>
      <div className="container-lg my-5 pt-5">
        <div className="row mx-5 justify-content-between"></div>
        <Generate file={file} name={name} />
      </div>
    </>
  );
}

export default CoverLetterGenerate;
