import React, {Component} from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MoodChooser from '../components/moodSelector'
import StyleChooser from '../components/styleSelector'
import './index.css'

const initialState = {
  mood: '',
  style: ''
}

class IndexPage extends Component {
  state= initialState

  selectMood = e => {
    if (this.state.mood) {
      this.setState(initialState)
    }

    this.setState({mood: e.target.value})
    console.log(`clicked on: ${e.target.value}`)
  }

  selectStyle = e => {

    if (this.state.style) {
      this.setState(initialState)
    }

    this.setState({style: e.target.value})
    console.log(`clicked on: ${e.target.value}`)
  }

  render() {
    if (this.state.mood && this.state.style) {
      console.log('call the api!!!!!!')
    }
    return (
      <Layout>
      <SEO title="Home" />
      <div className="flex-item-grow">
        <div className="flex-item">
          <section className="mood">
          <h1>What is your mood?</h1>
          <MoodChooser moodChanged={this.selectMood}/>
          </section>
          <section className="style">
            <h1>What is your style?</h1>
            <StyleChooser styleChanged={this.selectStyle}/>
          </section>
        </div>
      </div>
    </Layout>
    );
  }
}


export default IndexPage
