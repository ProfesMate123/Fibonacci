export const Teachers = () => {
  const teachersArray = [
    {
      id: 1,
      name: 'Wendy',
      subject: 'Algorithms',
      phone: 3114567890,
      credits: 3,
      link: '',
      img: 'https://firebasestorage.googleapis.com/v0/b/ygttienda.appspot.com/o/1.jpg?alt=media&token=b1903d40-a69f-4300-954c-6d5477559df2',
    },
    {
      id: 2,
      name: 'Katherine',
      subject: 'Math',
      phone: 3114567890,
      credits: 3,
      link: '',
      img: 'https://firebasestorage.googleapis.com/v0/b/ygttienda.appspot.com/o/1.jpg?alt=media&token=b1903d40-a69f-4300-954c-6d5477559df2',
    },
    {
      id: 3,
      name: 'Wendy',
      subject: 'Algorithms',
      phone: 3114567890,
      credits: 3,
      link: '',
      img: 'https://firebasestorage.googleapis.com/v0/b/ygttienda.appspot.com/o/1.jpg?alt=media&token=b1903d40-a69f-4300-954c-6d5477559df2',
    },
  ];

  return (
    <>
      {/* you map an array */}
      <div className="container">
        <div className="row">
          {teachersArray.map((teacher) => {
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
                    Subject: {teacher.subject}
                  </h5>
                  <p className="card-text text-center">
                    Credits: {teacher.credits} min
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
