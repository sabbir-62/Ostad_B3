import { useState } from 'react';

const ContentSection = () => {
    const [DisplayText,setDisplayText]=useState(null);
    const [textareaValue,setTextareaValue]=useState(null);

    const handleButtonClick =()=>{
        setDisplayText(textareaValue)
        setTextareaValue('');
    }
    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
      }; 
    return (
        <div>
            <textarea  cols="40" rows="10" placeholder='Write Your Message Here' value={textareaValue} onChange={handleTextareaChange}></textarea><br/>
            <button onClick={handleButtonClick}>Display Text</button><br/><br/><br/>
            <div className="display-text">{DisplayText}</div>
        </div>
    );
};

export default ContentSection;