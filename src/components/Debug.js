import React from 'react'

const Debug = props => (
  <pre style={{ textAlign: 'left' }}>{JSON.stringify(props, 0, 2)}</pre>
)

export default Debug
