function ClsListItem ({ coverLetter, selectedLetter, setSelectedLetter }) {

  return(
    <>
    <div onClick={() => setSelectedLetter(coverLetter)}>
      {coverLetter.title}
    </div>
    </>
  )

}

export default ClsListItem;