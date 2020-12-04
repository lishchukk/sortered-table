import React, {Component, Fragment} from 'react';
import './add-row.css'
import InputsContainer from "../inputs-container/inputs-container";

class AddRow extends Component {

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
    onChangeInputValue = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmitHandller = event => {
        event.preventDefault();
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        });

    };


    render() {
        const {onAddRow} = this.props;
        const {id, firstName, lastName, email, phone, isAddActive} = this.state;
        const newRow = {id, firstName, lastName, email, phone};
        const enableButton = (!(id !== '' && firstName !== '' && lastName !== '' && email !== '' && phone !== ''));

        return (
            <div>
                {
                    !isAddActive
                        ? <button className='btn btn-outline-secondary'
                                  onClick={() => this.onActiveToAdded()}>Добавить</button>
                        : <Fragment>
                        <form onSubmit={this.onSubmitHandller}>
                            <InputsContainer {...this.state} onChangeInputValue={this.onChangeInputValue}/>
                            <button className='btn btn-outline-secondary'
                                    onClick={() => onAddRow(newRow)} disabled={enableButton}
                            >
                                Добавить в таблицу
                            </button>
                        </form>
                        </Fragment>
                }


            </div>

        );
    }
}

export default AddRow;