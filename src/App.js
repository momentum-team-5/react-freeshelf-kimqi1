import React from 'react'
import './App.css'
import books from './books.json'

function App () {
  const bgColor = 'lightgrey'

  return (
    <div className='App'>
      <h1>My Reading List</h1>
      <div>
        {books.map(book => <BookComponent key={book.title} bgColor={bgColor} book={book} />)}
      </div>
    </div>
  )
}

class BookComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  render () {
    const book = this.props.book

    return (
      (
        <div className='Book' style={{ backgroundColor: this.props.bgColor }}>
          <div className='book_title'><strong>{book.title}</strong></div>
          <div className='author'>Author: {book.author}</div>
          <div className='short_description'> Brief Description: {book.shortDescription}</div>
          <div className='book_image'><img alt='' img style={{ height: '175px' }} src={book.coverImageUrl} /></div>
          <div>
            {this.state.expanded
              ? <button onClick={() => this.setState({ expanded: false })}>Less information</button>
              : <button onClick={() => this.setState({ expanded: true })}>More information</button>}
          </div>
          {this.state.expanded && (
            <div>
              <div className='detailed_description'><i>{book.detailedDescription}</i></div>
              {book.url && <div><strong>URL: </strong><a href={book.url}>{book.url}</a> </div>}
              {book.publisher && <div><strong>Publisher:</strong> {book.publisher}</div>}
              {book.publicationDate && <div><strong>Publication Date:</strong> {book.publicationDate} </div>}
            </div>
          )}
        </div>
      )
    )
  }
}

export default App
