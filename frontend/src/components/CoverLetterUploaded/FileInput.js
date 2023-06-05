import InputData from "../../utils/base64Decoder";
import { createRef } from "react";
import jwtFetch from "../../store/jwt";

function FileInput({ user, setSelectedLetter }) {
  // const fileInput = createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let file = e.target.files[0];

    //pdf parser

    // let reader = new FileReader();

    // reader.readAsDataURL(file);

    //formdata method
    const formData = new FormData();
    // console.log(e.target.files[0])
    formData.set("pdfFile", e.target.files[0]);

    //     for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // reader.onload = (e) => {

    // const formData = { file: e.target.result };
    // parser.decodeBase64(formData.file);

    jwtFetch("/api/coverletter/upload", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });

    //   const parseResponse = await response.json();
    //   if (response.ok){
    //     console.log("file uploaded")
    //   } else {
    //     console.error('error!!!')
    //   }
    // } catch (e) {
    //   console.error(e.message)
    // }
    // .then((res) => res.text())
    // .then((data) => console.log(data));

    // jwtFetch("/api/coverletter/upload", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   files: formData,
    //   body: JSON.stringify({
    //     file: formData,
    //     userId: user._id,
    //     name: file.name,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setSelectedLetter(data));
    // };

    //if size > 50k, type != application/pdf, etc...
  };

  return (
    <>
      <form class="mb-2">
        <label htmlFor="formFile" className="form-label">
          Upload a Cover Letter
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={(e) => handleSubmit(e)}
        />
      </form>
    </>
  );
}

export default FileInput;
