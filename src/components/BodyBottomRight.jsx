import React, { useState } from 'react'
import './BodyBottomRight.css'
import AddLogo from '../assets/add.png'
import MinusLogo from '../assets/minus.png'

function BodyBottomRight() {
  const jsonData = [ 
    {
      'title':"Do you offer freelancers?",
      'content':"Yes"
    },
    {
      'title':'What’s the guarantee that I will be satisfied with the hired talent?',
      'content':'will ensure that'
    },
    {
      'title':'Can I hire multiple talents at once?',
      'content':'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
    },
    {
      'title':'Why should I not go to an agency directly?',
      'content':'because we provide top-norch servie and used trending tools and technologies to satitsfy the customer need.'
    },
    {
      'title':'Who can help me pick a right skillset and duration for me?',
      'content':'Yes, for Sure! we are here for that only'
    }
  ];
  
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleContent = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };
  return (
    <div className='bottom-right-container'>
      <div className='query-items'>
      {jsonData.map((item, index) => (
        <div key={index} className='query-item'>
        <div className='query-item-top'>
        <h3>{item.title}</h3>
          <button onClick={() => toggleContent(index)}>
          <img src={expandedItem===index ? MinusLogo: AddLogo} alt='add button'></img>
          </button>
        </div>
          <div className='query-answers'>
          {expandedItem === index && (
            <div className='query-answer'>
              <p>{item.content}</p>
            </div>
          )} 
          </div>
          {index===4 ? '': <div className='line'></div>}
          </div>
      ))}
    </div>
    </div>
  )
}

export default BodyBottomRight