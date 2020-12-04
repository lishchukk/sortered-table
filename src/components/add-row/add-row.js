import React, {Component} from 'react';

class AddedRow extends Component {
    constructor(props){
        super(props)
    }

    state = {
        isAddActive: false,
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    };

    onActiveToAdded = () => {
        this.setState({isAddActive: true});
    };
    onChangeInputValue =  event  => {
        event.preventDefault();

        this.setState({
            [event.name]: event.target.value
        });
    };

    render() {
        const {onAddRow} = this.props;
        const { id, firstName, lastName, email, phone, isAddActive} = this.state;

        return (
            <div className='inputs-container'>
                <button onClick={() => this.onActiveToAdded()}>Добавить</button>

                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='id' onChange={this.onChangeInputValue} value={id}/>

                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='firstName' onChange={this.onChangeInputValue} value={firstName}/>

                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='lastName' onChange={this.onChangeInputValue} value={lastName}/>

                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='email' onChange={this.onChangeInputValue} value={email}/>

                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='phone' onChange={this.onChangeInputValue} value={phone}/>

            </div>
        );
    }
}

export default AddedRow;