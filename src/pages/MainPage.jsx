import React, { useState, useEffect } from 'react';
import '../css/mainPage.css';
import MainCardComponent from '../components/MainCardComponent.jsx';
import Navbar from '../components/Navbar.jsx';
import {IoMdSearch , IoMdCodeWorking} from "react-icons/io";
import { LuPenTool } from "react-icons/lu";
import { BiMath } from "react-icons/bi";
import { FaPaintBrush,FaGuitar } from "react-icons/fa";
import { db } from '../config/firebase.js';
import { collection, getDocs, query, orderBy, limit, doc, getDoc } from 'firebase/firestore';

function MainPage({ currentUser }) {
  const [courses, setCourses] = useState([]);
  const [coursesWithInstructors, setCoursesWithInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Fetch courses ordered by creation date (newest first)
        const coursesRef = collection(db, 'courses');
        const q = query(coursesRef, orderBy('createdAt', 'desc'), limit(12));
        const querySnapshot = await getDocs(q);
        
        const coursesData = [];
        querySnapshot.forEach((doc) => {
          coursesData.push({ id: doc.id, ...doc.data() });
        });

        setCourses(coursesData);

        // Fetch instructor data for each course
        const coursesWithInstructorData = await Promise.all(
          coursesData.map(async (course) => {
            try {
              if (course.instructorUid) {
                const instructorDoc = await getDoc(doc(db, 'users', course.instructorUid));
                if (instructorDoc.exists()) {
                  const instructorData = instructorDoc.data();
                  return {
                    ...course,
                    instructorName: `${instructorData.name || ''} ${instructorData.surname || ''}`.trim(),
                    instructorImage: instructorData.profilePictureUrl || null
                  };
                }
              }
              return {
                ...course,
                instructorName: null,
                instructorImage: null
              };
            } catch (error) {
              console.error(`Error fetching instructor for course ${course.id}:`, error);
              return {
                ...course,
                instructorName: null,
                instructorImage: null
              };
            }
          })
        );

        setCoursesWithInstructors(coursesWithInstructorData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="mainPage">
      <Navbar currentUser={currentUser} />
      <div className="search-container">
        <div className="search-box">
          <input type="text" placeholder="Ne öğrenmek istersin?" className="search-input" />
          <span className="search-icon"> <IoMdSearch size={25} /> </span>
        </div>
        <div className="filter-buttons">
          <button className="filter-btn">  <IoMdCodeWorking size={25} /> Kodlama</button>
          <button className="filter-btn"><LuPenTool size={25} /> Tasarım</button>
          <button className="filter-btn"><BiMath size={25} />Matematik</button>
          <button className="filter-btn"><FaPaintBrush size={25} /> Resim</button>
          <button className="filter-btn"> <FaGuitar size={25} />Enstrüman</button>
        </div>
      </div>
      <div className="title-section">
        <h2 className="lastAdds">Son Eklenenler</h2>
        <hr />
      </div>

      <div className="row mt-3 ">
        <div className="col-9">
          <div className="row">
            {loading ? (
              <div className="col-12 text-center">
                <p>Yükleniyor...</p>
              </div>
            ) : coursesWithInstructors.length > 0 ? (
              coursesWithInstructors.map((course) => (
                <div key={course.id} className="col-4 mb-3">
                  <MainCardComponent 
                    course={course}
                    instructorName={course.instructorName}
                    instructorImage={course.instructorImage}
                  />
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>Henüz kurs bulunmamaktadır.</p>
              </div>
            )}
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-12 mb-3">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;