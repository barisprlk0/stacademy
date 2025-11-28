function CourseDetailInfoCard(){
    return(
        <div className="card shadow-sm border-0 rounded-4 p-4 infoCard">
  <div className="row g-4 align-items-center infoCardRow">
   
    <div className="col-md-8 infoCardContent">
      <h2 className="fw-bold mb-3 infoCardTitle">Robotik Kodlama</h2>
      <p className="text-muted lh-lg infoCardDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
        consequat varius. Praesent a tortor tellus. Phasellus id augue eros.
        Aenean molestie blandit eleifend. Pellentesque a turpis erat. Vestibulum
        condimentum, sem at viverra elementum, nulla erat ultrices diam, et
        feugiat eros ex et urna.
      </p>
    </div>

    
    <div className="col-md-4 infoCardInstructor">
      <div className="d-flex flex-column align-items-center text-center infoCardInstructorContent">
        <img 
          src="https://picsum.photos/200"
          alt="Murat K."
          className="rounded-circle mb-3 infoCardInstructorImage"
          style={{ width: 72, height: 72, objectFit: 'cover' }}
        />
        <h5 className="fw-semibold mb-1 infoCardInstructorName">Murat K.</h5>
        <p className="small text-muted mb-3 infoCardInstructorDescription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, sed magnam dolorem molestiae exercitationem dolores 
          nisi eveniet tempore cumque explicabo ratione et possimus facere fugit qui quidem culpa aut. At.
        </p>
        <div className="d-grid gap-2 w-75">
          <button className="btn btn-primary fw-semibold infoCardJoinButton">Katıl</button>
          <button className="btn btn-outline-secondary btn-sm infoCardContactButton">
            Eğitmenle İletişime Geç
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default CourseDetailInfoCard;