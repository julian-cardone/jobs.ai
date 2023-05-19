function ClsListItem ({ coverLetter, selectedLetter, setSelectedLetter }) {

  return(
    <>
    <div onClick={() => setSelectedLetter(coverLetter)}>
      {coverLetter.name}
    </div>
    </>
  )

}

export default ClsListItem;