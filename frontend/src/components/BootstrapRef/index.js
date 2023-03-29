function BootstrapRef(){

  return(
    <>
      <div className="container-lg my-5">
        <h2>Basic grid</h2>
        <div className="row">
          <div className="col">
            <div className="p-5 bg-primary text-light">col 1</div>
          </div>
          <div className="col">
            <div className="p-5 bg-primary text-light">col 2</div>
          </div>
          <div className="col">
            <div className="p-5 bg-primary text-light">col 3</div>
          </div>
          <div className="col">
            <div className="p-5 bg-primary text-light">col 4</div>
          </div>
        </div>
      </div>

      <div className="container-lg my-5">
        <h2>column widths</h2>
        <div className="row">
          <div className="col-6">
            <div className="p-5 bg-primary text-light">col 1</div>
          </div>
          <div className="col-3">
            <div className="p-5 bg-primary text-light">col 2</div>
          </div>
          <div className="col-3">
            <div className="p-5 bg-primary text-light">col 3</div>
          </div>
        </div>
      </div>

      <div className="container-lg my-5">
        <h2>responsive column widths</h2>
        <div className="row">
          <div className="col-sm-4 col-lg-6">
            <div className="p-5 bg-primary text-light">col 1</div>
          </div>
          <div className="col-sm-4 col-lg-3">
            <div className="p-5 bg-primary text-light">col 2</div>
          </div>
          <div className="col-sm-4 col-lg-3">
            <div className="p-5 bg-primary text-light">col 3</div>
          </div>
        </div>
      </div>

      <div className="container-lg my-5">
        <h2>justifying columns</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="p-5 bg-primary text-light">col 1</div>
          </div>
          <div className="col-md-3">
            <div className="p-5 bg-primary text-light">col 2</div>
          </div>
          <div className="col-md-3">
            <div className="p-5 bg-primary text-light">col 3</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BootstrapRef