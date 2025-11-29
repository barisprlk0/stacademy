import '../css/mainPage.css';
import { db } from '../config/firebase.js';
import { doc, updateDoc, getDoc } from 'firebase/firestore';



function MainCardComponent({ course, instructorName, instructorImage, currentUser }) {

  const onClickEnroll = async () => {
    if (!currentUser) {
      alert("Kursa katılmak için giriş yapmanız gerekiyor.");
      return;
    }

    if (!course || !course.id) {
      alert("Kurs bilgisi bulunamadı.");
      return;
    }

    try {

      const courseRef = doc(db, 'courses', course.id);
      const courseDoc = await getDoc(courseRef);

      if (!courseDoc.exists()) {
        alert("Kurs bulunamadı.");
        return;
      }

      const courseData = courseDoc.data();
      const courseParticipants = courseData.courseParticipants || [];
      const enrollSize = courseData.enrollSize || 0;

      if (courseParticipants.includes(currentUser.uid)) {
        alert("Bu kursa zaten kayıtlısınız.");
        return;
      }
      if (courseParticipants.length >= enrollSize) {
        alert("Bu kursun kontenjanı dolmuş.");
        return;
      }

      // Check if user is trying to enroll in their own cours
      if (courseData.instructorUid === currentUser.uid) {
        alert("Kendi kursunuza katılamazsınız.");
        return;
      }
      const updatedParticipants = [...courseParticipants, currentUser.uid];
      await updateDoc(courseRef, {
        courseParticipants: updatedParticipants
      });

      alert("Kursa başarıyla katıldınız.");
      window.location.reload();
    } catch (error) {
      console.error("Kursa katılma hatası:", error);
      alert("Kursa katılırken bir hata oluştu: " + error.message);
    }
  }



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
  const courseLevel=course?.courseLevel || "(Belirtilmedi)";

  return (
    <div className="card m-0 p-0 customCard pb-3 ">
      <img src={courseImageUrl} className="card-img-top customImage p-0 m-0 " style={{height:'200px'}} alt={courseName}></img>
      <h3 className="text-start ms-2 mb-0">{courseName}</h3>
    <div className="d-flex flex-row">

      <span className="badge py-2 px-2 ms-2 mt-0 customBadge" alt="asdsa"> {enrollSize} Çırak </span>
      <span className="badge py-2 px-2 ms-2 mt-0 customBadge bg-success" alt="asdsa"> {courseLevel} </span>
    </div>

      <div className="profileWithButton mt-2">
        <div className="profile">
          <img src={profileImageUrl} className="profileImage" alt="profile"></img>
          <div className="profileInfo ms-2">
            <span className="profileName d-block">{displayName}</span>

          </div>
        </div>
        <button onClick={onClickEnroll} className="btn customButton py-1"><span className="customButtonText fw-bold">Katıl</span></button>
      </div>

    </div>
  );
}
export default MainCardComponent;