import React from 'react';

const UserInfo = ({user}) => {
    const { firstName, lastName, description,
        address: {streetAddress, city, state, zip} } = user;

    return (
        <div className='user-info-container'>
            <p>Выбран пользователь: <b>{`${firstName} ${lastName}`}</b></p>
            <p>Описание: <br/>
            <textarea defaultValue={description} />
            </p>
            <p>Адрес проживания: <b>{streetAddress}</b></p>
            <p>Город: <b>{city}</b></p>
            <p>Провинция/штат: <b>{state}</b></p>
            <p>Индекс: <b>{zip}</b></p>
        </div>
    );
};

export default UserInfo;