import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReply } from '../../actions/tweet';
import Spinner from '../../components/Spinner/Spinner';

const ReplyForm = ({ auth, tweetId, addReply }) => {

    const [text, setText] = useState('');

    return (
        (auth.loading) ? (
            <Spinner />
        ) : (
            <Fragment>
            <div className='css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll r-1j3t67a r-atwnbb' style={{ backgroundColor: 'rgb(21, 32, 43)', padding: '15px 15px 5px 15px'}}>
            <form className='my-1' onSubmit={e => {
                e.preventDefault();
                addReply(tweetId,{ text });
                setText('');
            }} >
                <div className='d-flex flex-row' >
                <img className='mr-2' style={{ width: '49px', height: '49px', borderRadius: '50%' }} src={auth.user.avatar} alt='avatar'/>
                <textarea
                    name='text'
                    rows='2'
                    style={{ width: '100%', backgroundColor: 'rgb(21, 32, 43)', border: 'none', color: 'white' }}
                    placeholder="Tweet your reply"
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}
                >
                </textarea>
                </div>
                <div className="css-1dbjc4n tweetbtn">
                    <div className='css-1dbjc4n r-1awozwy r-yfoy6g r-18u37iz r-1w6e6rj r-1wtj0ep r-id7aif r-184en5c'>
                        <div className='r-156q2ks r-1awozwy r-18u37iz'>
                            <input type="submit" style={{ height: '20px' }} className='tweetbutton btn btn-sm mr-0 my-1 r-sdzlij' value='Leave A Reply'/>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            
        </Fragment>
        )
    )
}

ReplyForm.propTypes = {
    addReply: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { addReply })(ReplyForm)
