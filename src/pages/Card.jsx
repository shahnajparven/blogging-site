import '../pages/Card.scss';


export const Card = ({img,title,details}) => {
  return (
    // <div className="container">
      <div className="cards">
      <div className="card">
        <div className='card-img'>
          <img src={img}/>
        </div>
        <div className='card-title'><h4>
        {title}</h4>
        <p>{details}</p></div>
        </div>

    </div>
    // </div>
  );
};
