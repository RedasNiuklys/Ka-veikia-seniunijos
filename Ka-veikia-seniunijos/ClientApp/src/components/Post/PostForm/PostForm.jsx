﻿import React, { useState } from 'react';
import NewPostHeader from '../NewPostHeader';
import Error from '../../Error/Error';
import TextArea from '../../Form/TextArea';
import Button from '../../Button/Button';
import './_post-form-style.scss';
import '../../Utils/_base.scss';
import '../../Button/_button.scss';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function PostForm({ onClose, onBack, postContent }) {
    const [text, setText] = useState(postContent?.text ? postContent.text : "");
    const [error, setError] = useState("");

    const handleOnSubmit = () => {
        if (!text) {
            setError('Įrašo tekstas neagli būti tuščias!');
            return;
        }

        if(text && postContent?.text) {
            handleOnUpdate();
            return;
        }
        const todaysDate = getTodaysDate();
        // // axios.post('https://localhost:44330/api/user', {

        // // })
        // .then(res => {
        //     if(res.status === 200) window.location.reload();
        // })
        // .catch(_ => {
        //     setErrorMessage('Įvyko nenumatyta klaida');
        // })
        window.location.reload();
    }

    const handleOnUpdate = () => {
        if(text === postContent.text) {
            setError('Įrašo tekstas nepasikeitė!');
            return;
        }
    }

    const getTodaysDate = () => {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

    return (
        <form className='post-form__container' >
            <NewPostHeader onClose={onClose} text='Naujas įrašas' />
            <TextArea
                styling='post-form__textarea'
                placeholder='Įrašo tekstas...'
                limit={500}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {error && <Error text={error} />}

            <div className='post-form__buttons'>
                {!postContent?.text &&
                    <Button
                        text='Atgal'
                        styling='btn btn--post-small'
                        onClick={onBack}
                    />
                }

                <Button
                    text={postContent?.text ? 'Atnaujinti' : 'Skelbti'}
                    styling='btn btn--post-small'
                    onClick={handleOnSubmit}
                />
            </div>
        </form>
    );
}

PostForm.propTypes = {
    onClose: PropTypes.func,
    onBack: PropTypes.func,
    postContent: PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.number
    })
}