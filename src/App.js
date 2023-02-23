import Post from './HW16/Post';
import './App.css';

const ANAKIN_IMAGE = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/df81s91-9d4f03c7-2002-4cf2-8358-26295ca9fad5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGY4MXM5MS05ZDRmMDNjNy0yMDAyLTRjZjItODM1OC0yNjI5NWNhOWZhZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4XblchJUk6JCcJvEEMEqJSGYiK_ef74Ci7g9CAX6uoE";
const RAY_IMAGE = "https://darksiderconfessions.files.wordpress.com/2020/07/20a101ab741d58c4139628b1e7674a77.jpg?w=900";



function App() {
  return (
    <Post author={{
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader"
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
      statistics= {{
        business: "20",
        like: "25",
        desktop: "5"
      }}
      />
    );
}

export default App;
