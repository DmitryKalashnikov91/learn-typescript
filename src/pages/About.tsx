import React from 'react';
import { useHistory } from 'react-router-dom'

const About: React.FC = () => {
    const history = useHistory();
  return (<>
  <h1 className='mt2'>Page information:</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, tempora.</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, tempora.</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, tempora.</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, tempora.</p>

  <button className='btn mt2' onClick={() => history.push('/')}>обратно к списку</button>
  </>
  )
}

export default About