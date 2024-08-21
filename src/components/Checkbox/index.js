import React, {useState} from 'react'

const Checkbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false)
  return (
      <div className='checkbox-wrapper'>
          <label>
              <input className={isChecked ? "checked": ""} onChange={() => setIsChecked(!isChecked)} type='checkbox' checked={isChecked} />
              <span>{ label }</span>
          </label>
         
    </div>
  )
}

export default Checkbox