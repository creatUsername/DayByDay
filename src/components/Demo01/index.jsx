import React from 'react'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function Demo01() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}

export default Demo01