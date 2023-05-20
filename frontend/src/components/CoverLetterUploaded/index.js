import { useEffect, useState } from "react";
import FileInput from "./FileInput";
import Preview from "./Preview";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoverLetter,
  fetchCoverLettersUploads,
} from "../../store/coverLetter";
import ClsList from "./ClsList";

function CoverLetterUploaded() {
  const dispatch = useDispatch();
  const coverLetters =
    useSelector((state) => Object.values(state.uploadedCoverLetters.all)) || [];
  const selectedCoverLetter =
    useSelector((state) => state.uploadedCoverLetters.one) || null;
  const [selectedLetter, setSelectedLetter] = useState(null);
  const user = useSelector((state) => state.session.user);

  //downloads correctly, just doesn't display correctly
  //   var link = document.createElement('a');
  // link.innerHTML = 'Download PDF file';
  // link.download = 'file.pdf';
  // link.href = 'data:application/octet-stream;base64,' + base64Data;
  // document.body.appendChild(link);

  useEffect(() => {
    dispatch(fetchCoverLettersUploads(user._id));
    if (selectedLetter != null) {
      dispatch(fetchCoverLetter(selectedLetter._id));
    }
  }, [user, selectedLetter]); //memoize or ref??

  return (
    <>
      {/* <SideBar></SideBar> */}
      <div className="container-lg my-5 pt-5">
        <div className="row mx-5 justify-content-between">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <FileInput
              user={user}
              dispatch={dispatch}
              selectedLetter={selectedLetter}
              setSelectedLetter={setSelectedLetter}
            ></FileInput>
            <p>
              loading symbol... selected CL:{" "}
              {selectedLetter?.name || "Please select a Cover Letter"}
            </p>
          </div>

          <div className="mt-5 col-sm-6 col-md-6 col-lg-4 px-0">
            {/* <div className="p-5 bg-primary"></div> */}
            <ClsList
              coverLetters={coverLetters}
              selectedLetter={selectedLetter}
              setSelectedLetter={setSelectedLetter}
            ></ClsList>
          </div>

          <div
            id="preview"
            className="pt-4 px-0col-sm-7 col-md-8 col-lg-8 min-vh-100"
          >
            {selectedCoverLetter && (
              <Preview selectedCoverLetter={selectedCoverLetter}></Preview>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CoverLetterUploaded;
