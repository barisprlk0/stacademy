import React from 'react';
import Navbar from '../components/Navbar.jsx';
import '../css/authPage.css';
import {useNavigate} from 'react-router-dom';

import CustomButton from '../components/CustomButton.jsx';
const universities = [
  "Abdullah Gül Üniversitesi",
  "Abant İzzet Baysal Üniversitesi",
  "Acıbadem Mehmet Ali Aydınlar Üniversitesi",
  "Adana Alparslan Türkeş Bilim Ve Teknoloji Üniversitesi",
  "Adıyaman Üniversitesi",
  "Afyon Kocatepe Üniversitesi",
  "Afyonkarahisar Sağlık Bilimleri Üniversitesi",
  "Ağrı İbrahim Çeçen Üniversitesi",
  "Ahi Evran Üniversitesi",
  "Akdeniz Üniversitesi",
  "Aksaray Üniversitesi",
  "Alanya Alaaddin Keykubat Üniversitesi",
  "Alanya Üniversitesi",
  "Altınbaş Üniversitesi",
  "Amasya Üniversitesi",
  "Anadolu Üniversitesi",
  "Ankara Hacı Bayram Veli Üniversitesi",
  "Ankara Medipol Üniversitesi",
  "Ankara Müzik ve Güzel Sanatlar Üniversitesi",
  "Ankara Sosyal Bilimler Üniversitesi",
  "Ankara Üniversitesi",
  "Ankara Yıldırım Beyazıt Üniversitesi",
  "Antalya Bilim Üniversitesi",
  "Ardahan Üniversitesi",
  "Artvin Çoruh Üniversitesi",
  "Atatürk Üniversitesi",
  "Atılım Üniversitesi",
  "Avrasya Üniversitesi",
  "Ayvansaray Üniversitesi",
  "Bahçeşehir Üniversitesi",
  "Balıkesir Üniversitesi",
  "Bandırma Onyedi Eylül Üniversitesi",
  "Bartın Üniversitesi",
  "Başkent Üniversitesi",
  "Batman Üniversitesi",
  "Bayburt Üniversitesi",
  "Beykent Üniversitesi",
  "Beykoz Üniversitesi",
  "Bezm-i Âlem Vakıf Üniversitesi",
  "Bilecik Şeyh Edebali Üniversitesi",
  "Bingöl Üniversitesi",
  "Biruni Üniversitesi",
  "Bitlis Eren Üniversitesi",
  "Boğaziçi Üniversitesi",
  "Bolu Abant İzzet Baysal Üniversitesi",
  "Bursa Teknik Üniversitesi",
  "Bursa Uludağ Üniversitesi",
  "Çağ Üniversitesi",
  "Çanakkale Onsekiz Mart Üniversitesi",
  "Çankaya Üniversitesi",
  "Çankırı Karatekin Üniversitesi",
  "Çukurova Üniversitesi",
  "Demiroğlu Bilim Üniversitesi",
  "Dicle Üniversitesi",
  "Doğuş Üniversitesi",
  "Dokuz Eylül Üniversitesi",
  "Düzce Üniversitesi",
  "Ege Üniversitesi",
  "Erciyes Üniversitesi",
  "Erzincan Binali Yıldırım Üniversitesi",
  "Erzurum Teknik Üniversitesi",
  "Eskişehir Osmangazi Üniversitesi",
  "Fenerbahçe Üniversitesi",
  "Fırat Üniversitesi",
  "Galatasaray Üniversitesi",
  "Gazi Üniversitesi",
  "Gaziantep Bilim Ve Teknoloji Üniversitesi",
  "Gaziantep İslam Bilim Ve Teknoloji Üniversitesi",
  "Gaziantep Üniversitesi",
  "Gebze Teknik Üniversitesi",
  "Giresun Üniversitesi",
  "Gümüşhane Üniversitesi",
  "Hacettepe Üniversitesi",
  "Hakkari Üniversitesi",
  "Haliç Üniversitesi",
  "Harran Üniversitesi",
  "Hatay Mustafa Kemal Üniversitesi",
  "Iğdır Üniversitesi",
  "Işık Üniversitesi",
  "İbn Haldun Üniversitesi",
  "İskenderun Teknik Üniversitesi",
  "İstanbul Arel Üniversitesi",
  "İstanbul Atlas Üniversitesi",
  "İstanbul Aydın Üniversitesi",
  "İstanbul Bilgi Üniversitesi",
  "İstanbul Esenyurt Üniversitesi",
  "İstanbul Gedik Üniversitesi",
  "İstanbul Gelişim Üniversitesi",
  "İstanbul Kent Üniversitesi",
  "İstanbul Kültür Üniversitesi",
  "İstanbul Medeniyet Üniversitesi",
  "İstanbul Medipol Üniversitesi",
  "İstanbul Nişantaşı Üniversitesi",
  "İstanbul Okan Üniversitesi",
  "İstanbul Sabahattin Zaim Üniversitesi",
  "İstanbul Sağlık Ve Teknoloji Üniversitesi",
  "İstanbul Rumeli Üniversitesi",
  "İstanbul Teknik Üniversitesi",
  "İstanbul Ticaret Üniversitesi",
  "İstanbul Tıp Fakültesi",
  "İstanbul Üniversitesi",
  "İstanbul Üniversitesi-Cerrahpaşa",
  "İstinye Üniversitesi",
  "İzmir Bakırçay Üniversitesi",
  "İzmir Demokrasi Üniversitesi",
  "İzmir Ekonomi Üniversitesi",
  "İzmir Katip Çelebi Üniversitesi",
  "İzmir Yüksek Teknoloji Enstitüsü",
  "Kadir Has Üniversitesi",
  "Kafkas Üniversitesi",
  "Kahramanmaraş İstiklal Üniversitesi",
  "Kahramanmaraş Sütçü İmam Üniversitesi",
  "Kapadokya Üniversitesi",
  "Karabük Üniversitesi",
  "Karadeniz Teknik Üniversitesi",
  "Karamanoğlu Mehmetbey Üniversitesi",
  "Kastamonu Üniversitesi",
  "Kayseri Üniversitesi",
  "Kıbrıs İlim Üniversitesi", // Türkiye'de YÖK'e bağlı Kuzey Kıbrıs'taki üniversitelerden biri
  "Kırklareli Üniversitesi",
  "Kırşehir Ahi Evran Üniversitesi",
  "Kilis 7 Aralık Üniversitesi",
  "Kocaeli Üniversitesi",
  "Koç Üniversitesi",
  "Konya Teknik Üniversitesi",
  "Kto Karatay Üniversitesi",
  "Kütahya Dumlupınar Üniversitesi",
  "Kütahya Sağlık Bilimleri Üniversitesi",
  "Lokman Hekim Üniversitesi",
  "Malatya Turgut Özal Üniversitesi",
  "Maltepe Üniversitesi",
  "Manisa Celâl Bayar Üniversitesi",
  "Mardin Artuklu Üniversitesi",
  "Marmara Üniversitesi",
  "Mef Üniversitesi",
  "Mersin Üniversitesi",
  "Millî Savunma Üniversitesi",
  "Mimar Sinan Güzel Sanatlar Üniversitesi",
  "Muğla Sıtkı Koçman Üniversitesi",
  "Munzur Üniversitesi",
  "Muş Alparslan Üniversitesi",
  "Necmettin Erbakan Üniversitesi",
  "Nevşehir Hacı Bektaş Veli Üniversitesi",
  "Niğde Ömer Halisdemir Üniversitesi",
  "Nuh Naci Yazgan Üniversitesi",
  "Ondokuz Mayıs Üniversitesi",
  "Ordu Üniversitesi",
  "Orta Doğu Teknik Üniversitesi",
  "Osmaniye Korkut Ata Üniversitesi",
  "Özyeğin Üniversitesi",
  "Pamukkale Üniversitesi",
  "Piri Reis Üniversitesi",
  "Polis Akademisi",
  "Recep Tayyip Erdoğan Üniversitesi",
  "Sabancı Üniversitesi",
  "Sağlık Bilimleri Üniversitesi",
  "Sakarya Uygulamalı Bilimler Üniversitesi",
  "Sakarya Üniversitesi",
  "Samsun Üniversitesi",
  "Sanko Üniversitesi",
  "Selçuk Üniversitesi",
  "Siirt Üniversitesi",
  "Sinop Üniversitesi",
  "Sivas Bilim Ve Teknoloji Üniversitesi",
  "Sivas Cumhuriyet Üniversitesi",
  "Süleyman Demirel Üniversitesi",
  "Şırnak Üniversitesi",
  "Tarsus Üniversitesi",
  "Tekirdağ Namık Kemal Üniversitesi",
  "Tobb Ekonomi Ve Teknoloji Üniversitesi",
  "Tokat Gaziosmanpaşa Üniversitesi",
  "Trabzon Üniversitesi",
  "Trakya Üniversitesi",
  "Tunceli Üniversitesi",
  "Türk-Alman Üniversitesi",
  "Türk Hava Kurumu Üniversitesi",
  "Türk Japon Bilim Ve Teknoloji Üniversitesi",
  "Türkiye Uluslararası İslam, Bilim Ve Teknoloji Üniversitesi",
  "Ufuk Üniversitesi",
  "Uluslararası Antalya Üniversitesi",
  "Uşak Üniversitesi",
  "Üsküdar Üniversitesi",
  "Van Yüzüncü Yıl Üniversitesi",
  "Yalova Üniversitesi",
  "Yaşar Üniversitesi",
  "Yeditepe Üniversitesi",
  "Yeni Yüzyıl Üniversitesi",
  "Yıldız Teknik Üniversitesi",
  "Yozgat Bozok Üniversitesi",
  "Yüksek İhtisas Üniversitesi",
  "Zonguldak Bülent Ecevit Üniversitesi",
];
const departments = [
    "Acil Yardım ve Afet Yönetimi",
    "Adalet",
    "Aile ve Tüketici Bilimleri",
    "Aktüerya Bilimleri",
    "Alman Dili ve Edebiyatı",
    "Almanca Öğretmenliği",
    "Amerikan Kültürü ve Edebiyatı",
    "Anestezi",
    "Antrenörlük Eğitimi",
    "Arkeoloji",
    "Bankacılık ve Finans",
    "Basın ve Yayın",
    "Beslenme ve Diyetetik",
    "Bilişim Sistemleri ve Teknolojileri",
    "Bilgisayar Mühendisliği",
    "Biyokimya",
    "Biyoloji",
    "Biyomedikal Mühendisliği",
    "Büro Yönetimi ve Yönetici Asistanlığı",
    "Ceza İnfaz ve Güvenlik Hizmetleri",
    "Çalışma Ekonomisi ve Endüstri İlişkileri",
    "Çocuk Gelişimi",
    "Çevre Mühendisliği",
    "Deniz Ulaştırma İşletme Mühendisliği",
    "Diş Hekimliği",
    "Dış Ticaret",
    "Dil ve Konuşma Terapisi",
    "Ebelik",
    "Eczacılık",
    "Eğitim Bilimleri",
    "Ekonomi",
    "Elektrik-Elektronik Mühendisliği",
    "Endüstri Mühendisliği",
    "Endüstriyel Tasarım",
    "Enerji Sistemleri Mühendisliği",
    "Ergoterapi",
    "Felsefe",
    "Finans Matematiği",
    "Fizik",
    "Fizik Tedavi ve Rehabilitasyon",
    "Gastronomi ve Mutfak Sanatları",
    "Gazetecilik",
    "Gemi İnşaatı ve Gemi Makineleri Mühendisliği",
    "Genetik ve Biyomühendislik",
    "Gıda Mühendisliği",
    "Görsel İletişim Tasarımı",
    "Halkla İlişkiler ve Tanıtım",
    "Havacılık Yönetimi",
    "Hukuk",
    "Hukuk (Eşit Ağırlık)",
    "Hukuk (Say-EA)",
    "İç Mimarlık ve Çevre Tasarımı",
    "İktisat",
    "İlahiyat",
    "İlköğretim Matematik Öğretmenliği",
    "İnsan Kaynakları Yönetimi",
    "İnşaat Mühendisliği",
    "İşletme",
    "İş Sağlığı ve Güvenliği",
    "İstatistik",
    "Kimya",
    "Kimya Mühendisliği",
    "Lojistik Yönetimi",
    "Maliye",
    "Makine Mühendisliği",
    "Mimarlık",
    "Moleküler Biyoloji ve Genetik",
    "Muhasebe ve Finans Yönetimi",
    "Mühendislik Yönetimi",
    "Mekatronik Mühendisliği",
    "Odyoloji",
    "Okul Öncesi Öğretmenliği",
    "Özel Eğitim Öğretmenliği",
    "Pazarlama",
    "Perfüzyon",
    "Pilotaj",
    "Polis Meslek Eğitimi",
    "Proje Yönetimi",
    "Psikoloji",
    "Radyo, Televizyon ve Sinema",
    "Rehberlik ve Psikolojik Danışmanlık",
    "Reklamcılık",
    "Siber Güvenlik",
    "Sinema ve Televizyon",
    "Sınıf Öğretmenliği",
    "Siyaset Bilimi ve Kamu Yönetimi",
    "Sosyal Hizmet",
    "Sosyal Medya Yönetimi",
    "Sosyoloji",
    "Tapu Kadastro",
    "Tarih",
    "Tarih Öğretmenliği",
    "Tıbbi Dokümantasyon ve Sekreterlik",
    "Tıbbi Görüntüleme Teknikleri",
    "Tıbbi Laboratuvar Teknikleri",
    "Tıp",
    "Turizm İşletmeciliği",
    "Turizm Rehberliği",
    "Türk Dili ve Edebiyatı",
    "Türk Dili ve Edebiyatı Öğretmenliği",
    "Türkçe Öğretmenliği",
    "Uçak Mühendisliği",
    "Ulaştırma ve Lojistik",
    "Uluslararası İlişkiler",
    "Uluslararası Ticaret ve Finansman",
    "Uluslararası Ticaret ve İşletmecilik",
    "Uzay Mühendisliği",
    "Veteriner Hekimliği",
    "Yapay Zeka Mühendisliği",
    "Yazılım Mühendisliği",
    "Yeni Medya ve İletişim",
    "Yönetim Bilişim Sistemleri (YBS)",
    // Popülerliği artan diğer bölümler ve mühendislikler
    "Adli Bilimler",
    "Bilişim Güvenliği Teknolojisi",
    "Biyosistem Mühendisliği",
    "Coğrafya",
    "Çizgi Film ve Animasyon",
    "Deniz Teknolojisi Mühendisliği",
    "Ekonometri",
    "Enerji Yönetimi",
    "Eşit Ağırlık Öğretmenlikleri (Genel)",
    "Fizyoterapi",
    "Gemi Makineleri İşletme Mühendisliği",
    "Havacılık Elektrik ve Elektroniği",
    "Havacılık ve Uzay Mühendisliği",
    "İngiliz Dili ve Edebiyatı",
    "İngilizce Mütercim ve Tercümanlık",
    "İngilizce Öğretmenliği",
    "İşletme Enformatiği",
    "Kentsel Tasarım ve Peyzaj Mimarlığı",
    "Kontrol ve Otomasyon Mühendisliği",
    "Kuyumculuk ve Mücevher Tasarımı",
    "Medya ve İletişim",
    "Metalurji ve Malzeme Mühendisliği",
    "Muhasebe ve Vergi Uygulamaları",
    "Nanoteknoloji Mühendisliği",
    "Nükleer Enerji Mühendisliği",
    "Öğretmenlik Programları (Genel)",
    "Orman Mühendisliği",
    "Patoloji Laboratuvar Teknikleri",
    "Peyzaj Mimarlığı",
    "Sağlık Yönetimi",
    "Seramik Mühendisliği",
    "Sigortacılık ve Risk Yönetimi",
    "Sosyal Bilgiler Öğretmenliği",
    "Su Ürünleri Mühendisliği",
    "Tarım Ekonomisi",
    "Tekstil Mühendisliği",
    "Tıbbi Biyolojik Bilimler",
    "Uluslararası Finans",
    "Uluslararası Girişimcilik",
    "Uluslararası İlişkiler (İngilizce)",
    "Uygulamalı İngilizce Çevirmenlik",
    "Uygulamalı Matematik",
    "Yapı Denetimi",
    "Ziraat Mühendisliği",
];
function RegisterPage() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };
    return (
        <div className="registerPage">
            <Navbar  />
                <div className="row mt-5">
        <div className="col-4 ">
            <div className="authContainer ">
                <h2 className="authTitle">Kayıt Ol</h2>
                <div className="form-group">
                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 mx-2">Ad </h5> 
                    <input type="text" placeholder="Kaan" className="authInput form-control w-100 mb-3" />
                    </div>


                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 mx-2">Soyad </h5> 
                    <input type="text" placeholder="Beşe" className="authInput form-control w-100 mb-3" />
                    </div>

                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 mx-2">E-Posta </h5> 
                    <input type="email" placeholder="kaanbese@gmail.com" className="authInput form-control w-100 mb-3" />
                    </div>

                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 mx-2">Şifre </h5> 
                    <input type="password" placeholder="•••••••••••" className="authInput form-control w-100 mb-3" />
                    </div>

                    
                    <div className="d-flex flex-column align-items-start">
                    <h5 className="m-0 mx-2">Tekrar Şifreniz </h5> 
                    <input type="password" placeholder="•••••••••••" className="authInput form-control w-100 mb-3" />
                    </div>


                    <select className="authInput form-control w-100 mb-3" defaultValue="">
                                <option value="" disabled>Üniversitenizi Seçiniz</option>
                                {universities.map((uni, index) => (
                                    <option key={index} value={uni}>
                                        {uni}
                                    </option>
                                ))}
                    </select>

                    <select className="authInput form-control w-100 mb-3" defaultValue="">
                                <option value="" disabled>Bölümünüzü Seçiniz</option>
                                {departments.map((dept, index) => (
                                    <option key={index} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                    </select>

                </div>

            </div>

            <div class="d-flex justify-content-between align-items-start mt-3" >
                <p className='btn btn-link' onClick={goToLogin} > Zaten bir hesabınız var mı, giriş yap. </p>
                <CustomButton text="Kayıt Ol" />
                </div>            



            
            </div>
            
            <div className="col-8">
                <img src="https://picsum.photos/800/600" alt="Register" className="authImage" />
            </div>

            </div>
        </div>
    )
}

export default RegisterPage;