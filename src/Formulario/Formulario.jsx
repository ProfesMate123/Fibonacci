
export function Formulario() {
    return (
        <>
        
            <form>
                <div className="row">
                    <div className="col-12"></div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"> <i className="bi bi-person-circle"></i></span>
                        <input type="text" class="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>


                </div>

                <div className="row">
                    <div className="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i className="bi bi-envelope-at"></i></span>
                            <input type="text" class="form-control" placeholder="Correo" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i className="bi bi-telephone"></i></span>
                            <input type="number" class="form-control" placeholder="Teléfono" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i className="bi bi-calendar-check"></i></span>
                            <input type="date" class="form-control" placeholder="Fecha de servicio" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i className="bi bi-alarm"></i></span>
                            <input type="text" class="form-control" placeholder="Hora de servicio" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                

                </div>

            </form>
        </>
    )
}