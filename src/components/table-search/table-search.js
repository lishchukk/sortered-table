import React, {useState} from 'react';

const TableSearch = ({onSearch}) => {

    const [value, setValue] = useState('');

    const onChangeValueHandler = (event) => setValue(event.target.value);


    return (
        <div className="input-group mb-3 mt-3">
            <input type="text" className="form-control" placeholder="Search"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"
            onChange={onChangeValueHandler} value={value}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button"
                    onClick={() => onSearch(value)}>
                        Button
                    </button>
                </div>
        </div>
    )
};

export default TableSearch;