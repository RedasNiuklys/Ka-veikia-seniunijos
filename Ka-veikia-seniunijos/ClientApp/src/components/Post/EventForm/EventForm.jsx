﻿import React, { useState } from 'react';
import NewPostHeader from '../NewPostHeader';
import NewPostButtons from '../NewPostButtons';
import TimeInput from '../../Form/TimeInput/TimeInput';
import { Switch } from 'pretty-checkbox-react';
import Error from '../../Error/Error';
import TextArea from '../../Form/TextArea';
import Input from '../../Form/Input';
import './_event-form-style.scss';
import '../../Utils/_base.scss';
import '../../Button/_button.scss';
import PropTypes from 'prop-types';

export default function EventForm({ onClose, onBack, onPost}) {
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(() => {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    });
    const [startTime, setStartTime] = useState('19:00');
    const [endTime, setEndTime] = useState('19:30');
    const [isFree, setIsFree] = useState(true);
    const [price, setPrice] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleOnSubmit = () => {
        if (!name || !place) {
            setErrorMessage('Renginio pavadinimas ir vieta yra privalomi!');
            return;
        }

        onPost();
    }

    return (
        <form className="event-form__container">
            <NewPostHeader onClose={onClose} text='Naujas renginys' />
            <div className='event-form__container-content'>
                <Input
                    styling='event-form__input'
                    type='text'
                    placeholder='Renginio pavadinimas'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    styling='event-form__input'
                    type='text'
                    placeholder='Renginio vieta'
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                /> 

                <TimeInput
                    startTime={startTime}
                    endTime={endTime}
                    currentDate={date}
                    onStartTimeChange={(value) => setStartTime(value)}
                    onEndTimeChange={(value) => setEndTime(value)}
                    onDateChange={(value) => setDate(value)}
                />

                <TextArea
                    styling='event-form__input'
                    placeholder='Renginio aprašymas...'
                    limit={500}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /> 

                <div className='event-form__switch'>
                    <Switch
                        color='primary'
                        shape='fill'
                        style={{ fontSize: '15px' }}
                        onClick={() => setIsFree(!isFree)}
                        checked={isFree}
                    >
                        <b className={!isFree ? 'paragraph--grey' : ''}>Renginys nemokas</b>
                    </Switch>

                    {
                        !isFree &&
                        <Input
                            styling='event-form__input event-form__input--price'
                            type='number'
                            placeholder='Kaina'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        /> 
                    }
                </div>
            </div>

            {errorMessage && < Error text={errorMessage} />}

            <NewPostButtons
                onBack={onBack}
                onSubmit={handleOnSubmit}
            />
        </form>
    );
}

EventForm.propTypes = {
    onClose: PropTypes.func,
    onBack: PropTypes.func,
    onPost: PropTypes.func
}