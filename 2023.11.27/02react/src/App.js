import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// 분명 생김새는 함수인데, 첫 단어가 대문자로 시작한다면, 그것은 컴포넌트! App Component
// 소문자로 쓰지마 그냥 일반함수랑 헷갈리니까
// 컴포넌트에서 return문은 항시 소괄호()

// Jsx문법 = Javascript & Xml
// svg => xmlns => xml name space: 해당 xml 문법을 창시한 창시자 혹은 기업을 기리기 위한 약속
// xml => Extensible markup language => 개발자가 자신만의 고유한 문법을 만들어서 사용하고 싶을 때

// html => 시맨틱 / h1/ nav / div 의미

function App() {
  const name = "KwonMinJoo";
  const location = "강남구";
  return (
    <div className="App">
      <Header />
      <Body name={name} location = {location}/>
      <Footer />
    </div>
  );
}

export default App;
