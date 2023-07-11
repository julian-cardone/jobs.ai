import ClsListItem from "./ClsListItem";

function ClsList( {coverLetters, setSelectedLetter} ) {

  // if (!coverLetters){
  //   coverLetters.append({name: "Please upload a cover letter"})
  // }

  return (
    <>
        {coverLetters.map((coverLetter) => {
          return <ClsListItem coverLetter={coverLetter}setSelectedLetter={setSelectedLetter}></ClsListItem>;
        })}
    </>
  );
}

export default ClsList;
