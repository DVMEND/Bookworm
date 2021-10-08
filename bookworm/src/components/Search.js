import React, { useState, useEffect } from "react"
import axios from "axios"
import ReactDOMServer from 'react-dom/server';


const Search = () => {
  const [term, setTerm] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://openlibrary.org/search.json", {
        params: {
          author: term,
        },
      })
      setResults(data.docs)
    }
    search()
  }, [term])

  const searchResultsMapped = results.map(result => {

    const article = {
      url : ReactDOMServer.renderToStaticMarkup((result.isbn && result.isbn.length) ? "http://covers.openlibrary.org/b/isbn/" + result.isbn[0] + "-M.jpg":"")
    }

    return (
      <div className="item" key={result.title}>
        <div className="content">
          <div className="header"><strong>{result.title}</strong></div>
        </div>
        <img src={article.url}></img>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search </label>
          <select 
            id="searchBy">
            <option value="author">Author</option>
            <option value="title">Title</option>
          </select>
          <input
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{searchResultsMapped}</div>
    </div>
  )
}

export default Search