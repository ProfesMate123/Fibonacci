export const Teacher = () => {
  const teachers = [
    {
      id: 1,
      name: 'Wendy ',
      subject: 'Algorithm',
      phone: 3118796534,
      img: '',
    },
    {
      id: 2,
      name: 'Katherine ',
      subject: 'Calculus',
      phone: 3115489623,
      img: '',
    },
    {
      id: 3,
      name: 'Yesid',
      subject: 'Statistics',
      phone: 3118796534,
      img: '',
    },
    {
      id: 4,
      name: 'Sebastian ',
      subject: 'Math',
      phone: 3118796534,
      img: '',
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {teachers.map((teacher) => {
            return (
              <div
                className="card my-3 mx-3"
                style={{ width: '24rem' }}
                key={teacher.id}
              >
                <img
                  src={teacher.img}
                  className="card-img-top img-fluid rounded mx-auto my-2 d-block"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title text-center">{teacher.name}</h3>
                  <h5 className="card-title text-center">
                    Contact: {teacher.phone}
                  </h5>
                  <p className="card-text text-center">
                    Duration: {feature.duration} min
                  </p>
                  <a
                    href={feature.link}
                    className="btn btn-dark d-flex justify-content-around"
                    target="_blank"
                  >
                    Go To Song
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
