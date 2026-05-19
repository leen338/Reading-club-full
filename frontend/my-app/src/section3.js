import './section3.css';
import Book1 from './images/spring.jpg';
import { useEffect, useState } from 'react';
export default function Sec3({state}) {
   const [books, setBooks] = useState([]);
    console.log(books);
  async function Bookss(){
    try{
      let get = await fetch("http://localhost:3000/api/books");
      get = await get.json();
      console.log(get);
      setBooks(get);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    Bookss();
  }, []);
  return (<>
   <div className="title3">
    <div className="classify">
      <h2 className="The-Title-Of-Section" style={{color:state ? "#e2dfe4" :"#1E1B4B", fontFamily: 'playpen',fontSize:" 27px" , transition:"0.3s"}}>
        Classified books by :
      </h2>
      <select className="sel sel1">
        <option>
          The date of publishing
        </option>
        <option>
          The author
        </option>
        <option>
          The series
        </option>
      </select>
    </div>
    <a href="####" className="view" style={{color:state ? "#e2dfe4" :"#1E1B4B" , transition:"0.3s"}}>
     view all
    </a>
   </div>
   <div className="sec33">
    {books.slice(0,5).map((book)=>(<div className="card" key={book._id}>
      <img
        src={book.cover}
        className="card-img-top card111"
        alt={book.title}
      />
        <div className="card-body">

        <h3 className="card-title Tcard">
          {book.title}
        </h3>

        <h6>
          Author : {book.author}
        </h6>

        <p>
          Category : {book.category}
        </p>

        <p className="card-text card111">
          {book.summary}
        </p>

        <p className="card-text card111">
          {book.description}
        </p>

        <p>
          Price : {book.isPaid}
        </p>

        <p>
          Added By : {book.addedBy}
        </p>

        <a
          href={book.pdf}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn1"
        >
          Read PDF
        </a>

      </div>
      </div>))}
    

 
   </div>
   </>
  );
}
