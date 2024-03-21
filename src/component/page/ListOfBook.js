

function ListOfBook (props){


    return (
        <>
            
            <div className="container">
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                    <input type="text" className="form-control"/>
                </div>
                <h3 className="text-start">List of Books</h3>
                <div className="row border rounded-top lh-lg ms-1 me-1">
                    <div className="col-6 text-start mt-1 mb-1">
                        Life of Pi
                    </div>
                    <div className="col-6 text-end mt-1 mb-1 ">
                        <span className="rounded-pill p-1" style={{backgroundColor:'grey'}}>Davan</span>
                    </div>
                </div>
              <div className="row border lh-lg ms-1 me-1">
                    <div className="col-6 text-start mt-1 mb-1">
                    <i class="bi bi-star-fill"></i> Học code totay
                    </div>
                    <div className="col-6 text-end mt-1 mb-1">
                        <span className="rounded-pill p-1" style={{backgroundColor:'grey'}}>Fpt</span>
                    </div>
                </div>
                <div className="row border lh-lg ms-1 me-1">
                    <div className="col-6 text-start mt-1 mb-1">
                    <i class="bi bi-star-fill"></i> Learn Angular by example
                    </div>
                    <div className="col-6 text-end mt-1 mb-1">
                        <span className="rounded-pill p-1" style={{backgroundColor:'grey'}}>Fpt-Aptech</span>
                    </div>
                </div>
                <div className="row border lh-lg ms-1 me-1">
                    <div className="col-6 text-start mt-1 mb-1">
                        Họ nhà trai
                    </div>
                    <div className="col-6 text-end mt-1 mb-1">
                        <span className="rounded-pill p-1" style={{backgroundColor:'grey'}}>Nguyễn Anh Tú</span>
                    </div>
                </div>
                <div className="row border rounded-bottom lh-lg ms-1 me-1">
                    <div className="col-6 text-start mt-1 mb-1">
                    <i class="bi bi-star-fill"></i> Đôi mắt có lửa
                    </div>
                    <div className="col-6 text-end mt-1 mb-1">
                        <div>Nguyễn Hùng Sơn</div>
                    </div>
                </div>
                <div className="row">
                <div className="btn-group mt-4 mb-4">
                    <button type="button" className="btn btn-secondary dropdown-toggle text-start " style={{backgroundColor: 'white', color: 'black'}} data-bs-toggle="dropdown" aria-expanded="false">
                        Author Ascending
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" >
                        <li><button className="dropdown-item" type="button">Đôi mắt có lửa</button></li>
                        <li><button className="dropdown-item" type="button">Life of Pi</button></li>
                        <li><button className="dropdown-item" type="button">Học code totay</button></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </>
    );
}

export default ListOfBook;