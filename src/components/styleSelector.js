import React, {Fragment}from 'react'

const StyleSelector = (props) => {
  return (
    <form>
      <input id="dogs" type="radio" name="gender" value="dogs" onChange={props.styleChanged} />
      <label htmlFor="dogs">dogs</label>
      <input id="cats" type="radio" name="gender" value="cats" onChange={props.styleChanged}/>
      <label htmlFor="cats">cats</label>
      <input id="mountains" type="radio" name="gender" value="mountains"onChange={props.styleChanged} />
      <label htmlFor="mountains">mountains</label>
    </form>
  )
}

export default StyleSelector