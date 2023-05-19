import FileInput from "./FileInput";
import { useLocation } from "react-router-dom";

function CoverLetterUploaded() {
  const location = useLocation();

  //testing
  // let binaryData = atob(base64Data);

  // var bin = atob(base64Data);
  // let blob = new Blob([bin], { type: 'application/pdf' });
  // let pdfUrl = URL.createObjectURL(blob);
  // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
  // console.log('File Size:', Math.round(bin.length / 1024), 'KB');
  // console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/)[1]);

  //downloads correctly, just doesn't display correctly
  //   var link = document.createElement('a');
  // link.innerHTML = 'Download PDF file';
  // link.download = 'file.pdf';
  // link.href = 'data:application/octet-stream;base64,' + base64Data;
  // document.body.appendChild(link);

  //WORKING:
  // var obj = document.createElement('object');
  // obj.style.width = '100%';
  // obj.style.height = '842pt';
  // obj.type = 'application/pdf';
  // obj.data = 'data:application/pdf;base64,' + base64Data;
  // document.body.appendChild(obj);

  return (
    //specify in routes
    <>
      <>
        <div className="container-lg my-5 pt-5">
          <div className="row mx-5 justify-content-between">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <FileInput></FileInput>
              <p>loading symbol... selected CL: example.pdf</p>
            </div>
            <div id="preview" className="col-sm-7 col-md-5 col-lg-7">
              <div className="p-5 bg-primary">preview</div>
            </div>
          </div>
          <div className="row mx-5">
            <div className="col-sm-6 col-md-6 col-lg-4"></div>
          </div>
          <div className="row mx-5">
            <div className="mt-5 col-sm-6 col-md-6 col-lg-4">
              <div className="p-5 bg-primary">uploaded files... select one</div>
            </div>
          </div>
          {/* <a innerHTML="Download for pdf" download=""></a> */}
        </div>
      </>
    </>
  );
}

export default CoverLetterUploaded;
