function ClsListItem ({ coverLetter, setSelectedLetter }) {

  return(
    <>
    <div onClick={() => setSelectedLetter(coverLetter)}>
      {coverLetter.name}
    </div>
    </>
  )

}

export default ClsListItem;