import InputData from "../../utils/base64Decoder";

function FileInput({ user, setSelectedLetter }) {

  const handleSubmit = async (e) => {
    
    let files = e.target.files;




    //pdf parser
    let parser = new InputData();
    
    let reader = new FileReader();
    // console.log(reader.readAsDataURL);
    
    // reader.readAsDataURL(files[0]);
    reader.readAsDataURL(files[0]);
    
    reader.onload = (e) => {
      
      const formData = { file: e.target.result };
      parser.decodeBase64(formData.file);
    
      // jwtFetch("/api/coverletter/upload", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     file: formData,
      //     userId: user._id,
      //     name: files[0].name,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => setSelectedLetter(data));
    };





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
