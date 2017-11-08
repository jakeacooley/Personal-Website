import React from 'react';
import FontAwesome from 'react-fontawesome'

export default () => {
  return (
    <div className="page-wrapper contact-wrapper">
      <a href="https://www.github.com/chooster"
      target="_blank" rel="noopener noreferrer">
        <FontAwesome
          className='icon'
          name='github-square'
          size='2x'
          style={{ color: '#FED766' }}
        />
      </a>
      <a href="https://www.linkedin.com/in/jake-cooley-576977b1/"
      target="_blank" rel="noopener noreferrer">
        <FontAwesome
          className='icon'
          name='linkedin-square'
          size='2x'
          style={{ color: '#FED766' }}
        />
      </a>
      <a href="mailto:jakeacooley@gmail.com">
        <FontAwesome
          className='icon'
          name='envelope-square'
          size='2x'
          style={{ color: '#FED766' }}
        />
      </a>
    </div>
  )
}
