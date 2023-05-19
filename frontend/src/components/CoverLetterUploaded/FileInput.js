import jwtFetch from "../../store/jwt";

function FileInput({ user, selectedLetter, setSelectedLetter }) {

  const handleSubmit = async (e) => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      console.warn("data ", e.target.result);

      const formData = { file: e.target.result };

      console.log(files[0])

      jwtFetch("/api/coverletter/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: formData, userId: user, name: files[0].name}),
      }).then((res) => (res.json())).then((data) => setSelectedLetter(data));
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
