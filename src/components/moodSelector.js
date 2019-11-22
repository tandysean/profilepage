import React, {Fragment}from 'react'

const MoodSelector = (props) => {
  return (
    <form>
      <input id="angry" type="radio" name="gender" value="angry" onChange={props.moodChanged} />
      <label htmlFor="angry">Angry</label>
      <input id="neutral" type="radio" name="gender" value="neutral" onChange={props.moodChanged}/>
      <label htmlFor="neutral">Neutral</label>
      <input id="happy" type="radio" name="gender" value="happy"onChange={props.moodChanged} />
      <label htmlFor="happy">Happy</label>
    </form>
  )
}

export default MoodSelector