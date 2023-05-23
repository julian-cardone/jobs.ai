function ClsListItem ({ coverLetter, setSelectedLetter }) {

  return(
    <>
    <div onClick={() => {setSelectedLetter(coverLetter); localStorage.setItem("selectedCl", JSON.stringify(coverLetter))}}>
      {coverLetter.name}
    </div>
    </>
  )

}

export default ClsListItem;