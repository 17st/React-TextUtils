import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white': '#042743',
        backgroundColor: props.mode==='dark'?'#13466e':'white',
        
    }

  return (
    <div className="container">
        <h2 className='my-2'  style={{color: props.mode === 'dark'?'white': 'black'}}>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode === 'dark'?'white': '#042743'}}>
                    <h2 className="accordion-header" id='headingOne'>
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        TextUtils, offering powerful tools to examine and understand their words. Whether you need word count, character analysis, or more detailed insights, TextUtils provides the tools to unlock the secrets within your text effortlessly.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode === 'dark'?'white': '#042743'}}>
                    <h2 className="accordion-header" id='headingTwo'>
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. 
                            TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode === 'dark'?'white': '#042743'}}>
                    <h2 className="accordion-header" id='headingThree'>
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firebox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
