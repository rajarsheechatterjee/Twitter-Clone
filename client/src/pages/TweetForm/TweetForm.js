import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/tweet';

const TweetForm = ({ addPost }) => {

    const [text, setText] = useState('');

    return (
        <Fragment>
            <h1>tweet form</h1>
            <form className='my-1' onSubmit={e => {
                e.preventDefault();
                addPost({ text });
                setText('');
            }} >
                <textarea
                    name='text'
                    cols='30'
                    rows='5'
                    placeholder='Create A Post'
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}
                >
                </textarea>
                <input type="submit" className='btn btn-dark my-1' value='Submit'/>

            </form>
            
        </Fragment>
    )
}

TweetForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(TweetForm)
