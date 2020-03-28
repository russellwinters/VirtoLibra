import React from 'react'
import {useBooks} from '../hooks'

const BestSeller = () => {
  const APIkey = process.env.REACT_APP_NYT_API
  const [data, loading] = useBooks(
    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${APIkey}`,
  )
  return (
    <>
      <h1>NYT Best Sellers</h1>
      {loading ? (
        'loading...'
      ) : (
        <ul>
          {data.results.books.map(({rank, title, author}) => (
            <li key={`book rank: -${rank}`}>
              <p>{title}</p>
              <p>{author}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default BestSeller
