import UploadBox from './components/UploadBox'
import QuestionBox from './components/QuestionBox'
import OutputBox from './components/OutputBox'

function App() {
  return (
    <div className="App">
      <h1>Welcome to PDF Dump</h1>
      <UploadBox></UploadBox>
      <QuestionBox></QuestionBox>
      <OutputBox></OutputBox>
    </div>
  );
}

export default App;
