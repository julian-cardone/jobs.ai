import { useState } from "react";

function Generate({ file, name }) {
  const [input, setInput] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();
    console.log(file);
    console.log(input);
  };

  const update = () => {
    return (e) => setInput(e.currentTarget.value);
  };

  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-4">
        <p>Selected Cover Letter: {name}</p>
      </div>
      <form onSubmit={handleGenerate}>
        <input
          type="text"
          value={input}
          onChange={update()}
          placeholder="description"
          className="col-4 border rounded"
        />

        <input
          type="submit"
          className="col-1 btn btn-outline-primary mt-2"
          value="Generate"
        />
      </form>
    </>
  );
}

export default Generate;
