import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
    
    const [show, setShow] = useState(false);

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn"  onClick={() => setShow((show) => !show)}>{show ? '-' : '+'}</button>
			</header>
			{ 
            show ? <p>{info}</p> : null  }
		 
		</article>
	)
}

export default Question
