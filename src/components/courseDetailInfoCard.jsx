import React from 'react';

function CourseDetailInfoCard({ courseName, description, instructorName, instructorImage, onEnroll }) {
  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 infoCard">
      <div className="row g-4 align-items-center infoCardRow">

        <div className="col-md-8 infoCardContent">
          <h2 className="fw-bold mb-3 infoCardTitle">{courseName || "Kurs Adı"}</h2>
          <p className="text-muted infoCardDescription">
            {description ? (description.length > 150 ? description.substring(0, 150) + "..." : description) : "Açıklama yok."}
          </p>
        </div>


        <div className="col-md-4 infoCardInstructor">
          <div className="d-flex flex-column align-items-center text-center infoCardInstructorContent">

            <div className="d-grid gap-2 w-75">
              <button onClick={onEnroll} className="btn btn-danger fw-semibold infoCardJoinButton">Katıl</button>
              <button className="btn btn-outline-warning btn-sm infoCardContactButton">
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