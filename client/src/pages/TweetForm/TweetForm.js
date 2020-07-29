import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/tweet';
import './TweetFormStyles.css';
import Spinner from '../../components/Spinner/Spinner';

const TweetForm = ({ addPost, auth }) => {

    const [text, setText] = useState('');

    return (
        auth.loading ? (
            <Spinner />
        ) : (
            <Fragment>
            <div className='css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll r-1j3t67a r-atwnbb' style={{ backgroundColor: 'rgb(21, 32, 43)'}}>
            <form className='my-1' onSubmit={e => {
                e.preventDefault();
                addPost({ text });
                setText('');
            }} >
                <div className='d-flex flex-row' >
                <img className='mr-2' style={{ width: '49px', height: '49px', borderRadius: '50%' }} src={auth.user.avatar} alt='avatar'/>
                <textarea
                    name='text'
                    rows='2'
                    style={{ width: '100%', backgroundColor: 'rgb(21, 32, 43)', border: 'none', color: 'white' }}
                    placeholder="What's Happening?"
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}
                >
                </textarea>
                </div>
                <div className="css-1dbjc4n">
                    <div className='css-1dbjc4n r-1awozwy r-yfoy6g r-18u37iz r-1w6e6rj r-1wtj0ep r-id7aif r-184en5c'>
                        <div className='r-156q2ks r-1awozwy r-18u37iz'>
                            <input type="submit" className='tweetbutton btn btn-sm mr-0 my-1 r-sdzlij' value='Tweet'/>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            
        </Fragment>
        )
    )
}

TweetForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addPost })(TweetForm)
