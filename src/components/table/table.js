import React from 'react';
import './table.css';

const Table = ({data, onSort, sort, sortField, onUserSelect}) => {

    let counter = 1;

    const sortIcon = sort === 'asc' ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>;


    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" onClick={() => onSort('id')}>
                        ID {sortField === 'id' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col" onClick={() => onSort('firstName')}>
                        First Name {sortField === 'firstName' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col" onClick={() => onSort('lastName')}>
                        Last Name {sortField === 'lastName' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col" onClick={() => onSort('email')}>
                        Email {sortField === 'email' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col" onClick={() => onSort('phone')}>
                        Phone {sortField === 'phone' ? <small>{sortIcon}</small> : null}
                    </th>
                </tr>
            </thead>

            <tbody>
            {
                data.map( item => (
                    <tr key={item.phone} onClick={() => onUserSelect(item)}>
                        <td>{counter++}</td>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                    )
                )
            }
            </tbody>
        </table>
    );
};

export default Table;