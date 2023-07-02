import React from "react";
// import * as pdfjsLib from 'pdfjs-dist';
import * as pdfjsLib from "pdfjs-dist/webpack";
import jwtFetch from "../../store/jwt";

// pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.8.162/pdf.worker.js`;
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

function FileInput({ user, setSelectedLetter }) {
  const handleSubmit = (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload = function (e) {
      const arrayBuffer = e.target.result;

      pdfjsLib.getDocument(arrayBuffer).promise.then(function (pdf) {
        // Access PDF document and perform parsing or other operations here
        pdf.getPage(1).then(function (page) {
          // Use the page object here
          page.getTextContent().then(function (textContent) {
            // Use the text content here
            jwtFetch("/api/coverletter/upload", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                file: textContent,
                userId: user._id,
                name: file.name,
              }),
            })
              .then((res) => res.json())
              .then((data) => setSelectedLetter(data));

            // Access the text value
            // var text = textItem.str;

            // Access the position of the text
            // var left = textItem.transform[4];
            // var top = textItem.transform[5];
          });
        });
      });
    };

    reader.readAsArrayBuffer(file);
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
