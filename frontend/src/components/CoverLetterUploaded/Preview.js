function Preview({ selectedCoverLetter }) {

  let base64Data = selectedCoverLetter.uri;

  return (
    <>
      <object
        data={"data:application/pdf;base64," + base64Data}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object>
    </>
  );
}

// special thanks to:
// https://base64.guru/developers/javascript/examples/decode-pdf

export default Preview;