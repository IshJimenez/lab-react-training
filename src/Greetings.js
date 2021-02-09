import React from 'react';

function Greetings({lang, children}){
  const greetingsObj = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  }
  const printGreet = greetingsObj[lang]
  return (
    <article className='container'>
      <p>
      <span>{printGreet} {children}</span>
      </p>
    </article>
  )
}

export default Greetings 