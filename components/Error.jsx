import { useState } from "react"

const Error = ({errorMesage, error, clases}) => {
    
  return (
    <div>

      <p className={error && clases}>{errorMesage}</p>
    </div>
  )
}

export default Error
