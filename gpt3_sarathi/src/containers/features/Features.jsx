import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css';

const featuresDate =[
  {
    title: 'Improving end distrusts Instantly',
    text: 'From they john he gave of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occassional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongs chiefly address.'
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresDate.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Features