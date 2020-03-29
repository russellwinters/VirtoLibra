import React from 'react'
import {useBooks} from '../hooks'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledList = styled.li`
  list-style: none;
`

const BestSeller = () => {
  const APIkey = process.env.REACT_APP_NYT_API
  const [data, loading] = useBooks(
    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${APIkey}`,
  )
  return (
    <Container>
      <h1>NYT Best Sellers</h1>
      {loading ? (
        'loading...'
      ) : (
        <ul>
          {data.results.books.map(
            ({rank, title, author, amazon_product_url}) => (
              <StyledList key={`book rank: -${rank}`}>
                <p>{title}</p>
                <p>{author}</p>
                <a href={amazon_product_url} target="_blank">
                  Purchase here
                </a>
              </StyledList>
            ),
          )}
        </ul>
      )}
    </Container>
  )
}

export default BestSeller
