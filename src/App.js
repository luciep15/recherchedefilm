import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Home from './components/home';
import Detail from './components/detail';
import Recherche from './components/recherche';
import {Route, Routes, useParams} from "react-router-dom";

const MyHoc = (props) =>{
  //useParams récupère tous le paramètres d'url dont j'ai besoin
  const params = useParams()
  //je récupère le composant class que je veux run via la props child
  const Child = props.child
  
  return (<Child {...props} params={params}/>)
  
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<MyHoc child={Detail} />} />
        <Route exact path="/recherche" element={<Recherche />}/>
      </Routes>
    </div>
  );
}

export default App;
