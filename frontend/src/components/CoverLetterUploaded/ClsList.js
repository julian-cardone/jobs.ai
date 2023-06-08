import ClsListItem from "./ClsListItem";

function ClsList({ coverLetters, setSelectedLetter }) {
  return (
    <>
      {coverLetters.map((coverLetter) => {
        return (
          <ClsListItem
            coverLetter={coverLetter}
            setSelectedLetter={setSelectedLetter}
          ></ClsListItem>
        );
      })}
    </>
  );
}

export default ClsList;
