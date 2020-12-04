import React from 'react';
import './data-mode-selector.css'

const DataModeSelector = ({onSelectDataMode}) => {

    const smallDataUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    const bigDataUrl = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

    return (
        <div className='buttons-container' >
            <button onClick={()=> onSelectDataMode(smallDataUrl)} className="btn btn-success">32 элемента</button>
            <button onClick={()=> onSelectDataMode(bigDataUrl)} className="btn btn-danger">1000 элементов</button>
        </div>
    );
};

export default DataModeSelector;