import WOW from 'wow.js';
import 'animate.css';
import { useEffect } from 'react';

export const Services = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }),
    [];

  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row my-4 d-flex justify-content-evenly">
            <div className="col-3 d-flex">
              <p className="fw-medium text-md-start text-wrap lh-base my-auto">
                Clases por horas: El plan se basa en 2 horas diarias con temas
                de diferentes unidades (Matemáticas básicas, álgebra,
                Estadística).
              </p>
            </div>
            <div className="col-4 d-flex wow  animate__animated  animate__bounceInDown">
              <img
                src="https://images.unsplash.com/photo-1561089489-f13d5e730d72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="rounded mx-auto d-block img-fluid"
                alt="..."
              />
            </div>
            <div className="col-3 d-flex">
              <p className="fw-medium text-md-start text-wrap lh-base my-auto">
                Curso intensivo: En este curso aprenderás las bases de
                matemáticas las cuales son fundamentales para materias como
                geometría, trigonometría, calculo y álgebra lineal. El curso
                cuenta con una duración de 10 días.
              </p>
            </div>
          </div>
          <div className="row my-4 d-flex justify-content-evenly">
            <div className="col-4 wow  animate__animated animate__bounceInLeft">
              <img
                src="https://images.unsplash.com/photo-1601397922721-4326ae07bbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                className="rounded mx-auto d-block img-fluid"
                alt="..."
              />
            </div>
            <div className="col-3 d-flex">
              <p className="fw-medium text-md-start text-wrap lh-base my-auto">
                Solución de talleres: Se resuelven todo tipo de problemas
                matemáticos, ayudándote a que obtengas un conocimiento más claro
                de los diversos temas.
              </p>
            </div>
            <div className="col-4 wow  animate__animated animate__bounceInRight">
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="rounded mx-auto d-block img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div className="row my-4 d-flex justify-content-evenly">
            <div className="col-3 d-flex">
              <p className="fw-medium text-md-start text-wrap lh-base my-auto">
                Exámenes prácticos: Contamos con diferentes cuestionarios para
                que evalúes tus conocimientos.
              </p>
            </div>
            <div className="col-5 d-flex wow  animate__animated  animate__bounceInUp">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1"
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://images.ctfassets.net/p0qf7j048i0q/5e55weVlQvflx0dIi5dGxK/329049509877833f470ed635a76b19f2/G533653277.png?w=3840&q=75&h=3840&fm=webp"
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://www.haverford.edu/sites/default/files/Homepage/Vergilius-Eremite-cc_Mathematics-1200.jpg"
                      className="d-block w-100 rounded"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-3 d-flex">
              <p className="fw-medium text-md-start text-wrap lh-base my-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                excepturi enim quis quasi iste nam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
