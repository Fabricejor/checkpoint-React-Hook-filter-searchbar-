import './App.css';
import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import "./assets/style/Filter.css"


const App = () => {
  const [show,setShow] = useState(false);
  const toggleShow =()=>{
    setShow(!show)
  }
  // les etats pour chaque
  const [movies, setMovies] = useState([
    { titre: 'Code and Furious', description: 'Action , Course ,Drogue ,Adrénaline, Adventure', posterURL: 'https://static.posters.cz/image/750webp/114155.webp', note: 9.8 },
    { titre: 'Film 2', description: 'Description du film 2', posterURL: 'http://cdn.collider.com/wp-content/uploads/2017/05/blade-runner-2049-poster-ryan-gosling.jpeg', note: 3 },
    { titre: 'Joke Air', description: 'Description du film 3', posterURL: 'https://media.senscritique.com/media/000018727645/300/joker.jpg', note: 7.5 },
    { titre: 'Mad MAX Fury road', description: 'Description du film 4', posterURL: 'https://media.senscritique.com/media/000017108234/300/mad_max_fury_road.jpg', note: 7 },
    { titre: 'TU NE TUERAS POINT', description: 'Film Chrétien basé sur un des dix commandement', posterURL: 'https://media.senscritique.com/media/000016515800/300/tu_ne_tueras_point.jpg', note: 10 },
    { titre: 'BABY DRIVER', description: 'Course poursuite , Action , adrenaline', posterURL: 'https://aws3.vdkimg.com/film/1/3/3/8/1338851_poster_scale_480x640.jpg', note: 8 },
  ]);

  //! initialisation des donnés filtres 
  const [titre, setTitre] = useState("");//chaine
  const [note, setNote] = useState(0);//nombre 
  //!!!!! Creation de nouveaux etats pour l'ajouts il ne doivent pas partager le meme noms
  const [addtitre, setAddtitre] = useState("");//chaine
  const [addresume, setAddresume] = useState("");
  const [addnote, setAddnote] = useState(0);//number
  const [addurl, setAddurl] = useState("");
  //! fonction de filtre
  const filteredMovies = movies.filter(movie =>
    (titre === "" || (typeof movie.titre === 'string' && movie.titre.toLowerCase().includes(titre.toLowerCase())))
    &&
    (note === "" || movie.note >= parseFloat(note))
  );

  console.log("note " + note, "titre : " + titre);
  //?pour récuperer toutes les donnés du 2nd formulaire 
  const AddMovie = () => {
    // on ajoute que si les champs des formulaires sont remplis
    if (addtitre != "" && addnote != 0) {
      const newMovie = {
        titre: addtitre,
        description: addresume,
        posterURL: addurl,
        note: parseFloat(addnote)
      };
      //on ajoute a la liste le tableau d'objet NewMovies avec le spread operator
      setMovies([...movies, newMovie])
    };
    //! Reinitialise tous les donnéess du formulaire
    setAddnote(0);
    setAddtitre("");
    setAddresume("");
    setAddurl("");
    setShow(false)
  };

  return (
    <div className="App">
      <Navbar />
      <div className="d-flex justify-content-center h-100">
        <div className="search">
          <input type="text" className="search-input" placeholder="titre search" name="titre"
            value={titre} onChange={e => setTitre(e.target.value)} />
          {/* value donne la valeur direct de la variable deriere le input 
                        onChange methode en javascript pour modifier l'etat avec le mot clé setTitre */}
          <a href="#" className="search-icon">
            <i className="fa fa-search"></i>
          </a>
        </div>
        <div className="search">
          <input type="number" className="search-input" placeholder="note" name="note"
            value={note} onChange={e => setNote(e.target.value)} />
          <a href="#" className="search-icon">
            <i className="fa fa-star"></i>
          </a>
        </div>
      </div>
          {!show &&
          <div className='addbutton'>
            <button onClick={toggleShow} title='ajouter film'> <i className="fa fa-plus-square"></i></button>
            </div>}
      { show &&
        <div className="add-form">
          <h2>Ajouter un nouveau film</h2>
          <form className='form-add'>
            <input type="text" placeholder="add titre" value={addtitre} onChange={(e) => setAddtitre(e.target.value)} />
            <input type="text" placeholder='Ajouter resume ou description' value={addresume} onChange={(e) => setAddresume(e.target.value)} />
            <input type="text" placeholder="lien vers le poster du film" value={addurl} onChange={(e) => setAddurl(e.target.value)} />
            <input type="number" value={addnote} max={10} min={0} onChange={(e) => setAddnote(e.target.value)} />

            <button type="button" onClick={AddMovie}>Ajouter</button>
          </form>
        </div>
      }
      <MovieList movies={filteredMovies} />

    </div>
  );
}

export default App;
