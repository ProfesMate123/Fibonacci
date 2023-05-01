import Swal from 'sweetalert2';

export const Formulario = () => {
  const alert = async () => {
    await Swal.fire('Cita Agendada!');
  };

  return (
    <>
      <section className="container-fluid h-50 banner2">
        <div className="row" id="overlay">
          <div className="col-9 mx-auto my-auto">
            <form className="bg-dark text-light d-flex flex-column rounded m-4 p-4">
              <div className="row">
                <div className="col-12"></div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    {' '}
                    <i className="bi bi-person-circle"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i className="bi bi-envelope-at"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Correo"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                </div>
                <div className="col-6">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i className="bi bi-telephone"></i>
                    </span>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Teléfono"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i className="bi bi-calendar-check"></i>
                    </span>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Fecha de servicio"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                </div>
                <div className="col-6">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i className="bi bi-alarm"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Hora de servicio"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-secondary my-3 fw-bold"
                onClick={alert}
              >
                Agendar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
