import '../css/mainPage.css';



function MainCardComponent() {
  return (
    <div className="card m-0 p-0 customCard pb-3 ">
      <img src="https://picsum.photos/350/220" className="card-img-top customImage p-0 m-0"></img>
      <h3 className="text-start ms-2 mb-0">Web Geliştirme</h3>

      <span className="badge py-2 px-2 ms-2 mt-0 customBadge" alt="asdsa"> 3 Çırak </span>
      <div className="profileWithButton mt-2">
        <div className="profile">
          <img src="https://picsum.photos/50/50" className="profileImage" alt="profile"></img>
          <div className="profileInfo ms-2">
            <span className="profileName d-block">Barış P.</span>
            <div className="stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>
        </div>
        <button className="btn customButton py-1"><span className="customButtonText fw-bold">Katıl</span></button>
      </div>

    </div>
  );
}
export default MainCardComponent;