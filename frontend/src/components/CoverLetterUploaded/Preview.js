function Preview() {

  // var bin = atob(base64Data);
  // let blob = new Blob([bin], { type: 'application/pdf' });
  // let pdfUrl = URL.createObjectURL(blob);
  // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
  // console.log('File Size:', Math.round(bin.length / 1024), 'KB');
  // console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/)[1]);

  return (
    <>
      {/* <object
        data={"data:application/pdf;base64," + base64Data}
        type="application/pdf"
        width="100%"
        height="500vh"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object> */}
    </>
  );
}

export default Preview;