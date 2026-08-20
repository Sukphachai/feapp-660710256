import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ศุกร์ภชัย ศิริอินภิบาล', nickname: 'ฟลุ๊ค',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 2, name: 'อณสวาร์ อ่องมะลิ', nickname: 'วา',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 3, name: 'แพรวา เรืองศรี', nickname: 'แพรวา',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'แมว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
// import React from 'react';
// // import Header from './components/Header';
// // import MovieList from './componMovieListents/';
// // import Footer from './components/Footer';
// import Greeting from './components/Greeting';
// import Card from './components/Card';
// const students = [
//   { id: 1, name: 'ฝน',   year: 3 },
//   { id: 2, name: 'เต้ย', year: 2 },
//   { id: 3, name: 'มายด์', year: 4 },
// ];
// const members = [
//   { id: 1, name: 'ศุกร์ภชัย ศิริอินภิบาล', nickname: 'ฟลุ๊ต',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
//   // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
//   { id: 2, name: 'อณสวาร์ อ่องมะลิ', nickname: 'วา',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
//   { id: 3, name: 'แพรวา เรืองศรี', nickname: 'แพรวา',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'แมว'] },
// ];
// function App() {
//   return (
//     <div>
//       <Card title="ประกาศ">
//         <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
//         <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
//       </Card>
//       <h1>รายชื่อนักศึกษา</h1>
//       {students.map((s) => (
//         <Greeting key={s.id} name={s.name} year={s.year} />
//       ))}
//     </div>
//   );
// }

// export default App; 
