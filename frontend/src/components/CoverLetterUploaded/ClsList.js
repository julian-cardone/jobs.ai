import ClsListItem from "./ClsListItem";

function ClsList( {coverLetters, selectedLetter, setSelectedLetter} ) {

  return (
    <>
      {/* <div> */}
        {coverLetters.map((coverLetter) => {
          return <ClsListItem coverLetter={coverLetter}selectedLetter={selectedLetter}setSelectedLetter={setSelectedLetter}></ClsListItem>;
        })}
      {/* </div> */}
    </>
  );
}

export default ClsList;
