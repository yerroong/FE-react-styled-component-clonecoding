import Header from "./components/Header";
import Contents from "./components/Contents";
import Pictures from "./components/Pictures";
import Footer from "./components/Footer";


// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
function App() {
  return (
    <>
      <Header />
      <Contents />
      <Pictures />
      <Footer />
    </>
  );
}

export default App;
