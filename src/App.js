import './main.css'
import Date from './components/Date'
import {useState} from 'react'
import {GetFile} from './components/GetFile'

function App() {

  document.body.style.backgroundColor = "#DBD5B5";

  const [data, SetData] = useState(0)//global

  return (
    <div className="App">
      <div className="container-column padding-top-m">
      <h1>Newsletter</h1>
      <h2>{data == 0 ? "Date Selected: " : `Date Selected: ` + data}</h2>
      </div>      

      <div className="ui">
        <Date onDate={SetData}/>
        <GetFile date={data}/>
      </div>

    </div>
  );
}

export default App;
