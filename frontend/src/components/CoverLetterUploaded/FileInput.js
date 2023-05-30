function FileInput({ user, setSelectedLetter }) {

  const handleSubmit = async (e) => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {

      const formData = { file: e.target.result };
      console.log(formData.file);
    
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
