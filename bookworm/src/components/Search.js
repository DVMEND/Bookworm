import React, { useState, useEffect } from "react"
import axios from "axios"

const Search = () => {
  const [term, setTerm] = useState("tolkien")
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
    return (
      <div className="item" key={result.isbn}>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        {result.isbn}
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search Term</label>
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