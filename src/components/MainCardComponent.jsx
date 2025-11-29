import '../css/mainPage.css';



function MainCardComponent({ course, instructorName, instructorImage }) {
  const formatName = (name) => {
    if (!name) return 'İsimsiz';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`;
  };

  const displayName = formatName(instructorName);
  const profileImageUrl = instructorImage || 'https://picsum.photos/50/50';
  const courseImageUrl = course?.courseImage || 'https://picsum.photos/350/220';
  const courseName = course?.courseName || 'Kurs Adı';
  const enrollSize = course?.enrollSize || 0;

  return (
    <div className="card m-0 p-0 customCard pb-3 ">
      <img src={courseImageUrl} className="card-img-top customImage p-0 m-0" alt={courseName}></img>
      <h3 className="text-start ms-2 mb-0">{courseName}</h3>

      <span className="badge py-2 px-2 ms-2 mt-0 customBadge" alt="asdsa"> {enrollSize} Çırak </span>
      <div className="profileWithButton mt-2">
        <div className="profile">
          <img src={profileImageUrl} className="profileImage" alt="profile"></img>
          <div className="profileInfo ms-2">
            <span className="profileName d-block">{displayName}</span>

          </div>
        </div>
        <button className="btn customButton py-1"><span className="customButtonText fw-bold">Katıl</span></button>
      </div>

    </div>
  );
}
export default MainCardComponent;