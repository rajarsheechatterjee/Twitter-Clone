import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import TweetItem from './TweetItem';
import TweetForm from '../TweetForm/TweetForm';
import { getTweets } from '../../actions/tweet';
import { getCurrentProfile, getProfiles, followProfile } from '../../actions/profile';
import './HomePageStyles.css';
import Header from '../../components/Header/Header';

const HomePage = ({ getCurrentProfile, getTweets, getProfiles, followProfile, profile: {  profiles, profile, profileLoading }, tweet: { tweets, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
        getTweets();
        getProfiles();
    }, [getCurrentProfile, getTweets, getProfiles]);

    return (
        (profileLoading && loading) ? <Spinner /> : <Fragment>
            <div style={{maxWidth: '1340px'}} className="container" >
            <div className="row">
               <header role='banner' className='css-1dbjc4n r-obd0qt r-16y2uox r-1g40b8q'>
                  <Header />
                </header>
                <div className="col-md-6">
                <div className="r-1ye8kvj css-1dbjc4n r-yfoy6g r-18bvks7 r-1ljd8xs r-13l2t4g r-1phboty r-1jgb5lz r-11wrixw r-61z16t r-1ye8kvj r-13qz1uu r-184en5c mx-0">
                    <div className="css-1dbjc4n r-aqfbo4 r-yfoy6g r-1ila09b r-rull8r r-qklmqi r-gtdqiz r-ipm5af r-1g40b8q r-1h3ijdo r-1j3t67a r-qklmqi r-rull8r r-1ila09b" >
                        <div className='css-1dbjc4n r-1loqt21 r-136ojw6' >
                            <div className='css-1dbjc4n r-1awozwy r-18u37iz r-1h3ijdo r-1777fci r-1jgb5lz r-sb58tz r-13qz1uu' >
                            <div className="css-1dbjc4n r-16y2uox r-1wbh5a2 r-1pi2tsx r-1777fci" >
                                <div className='r-1habvwh' >
                                    <h2 style={{ alignItems: 'flex-start', fontWeight: '800', fontSize: '19px', color: 'rgb(255, 255, 255)', justifyContent: 'center', verticalAlign: 'middle' }}>Home</h2>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <TweetForm />
                    <div style={{ height: '10px', backgroundColor: 'rgb(37, 51, 65)' }} ></div>
                    {profile && profile.following.length > 0 && profile.following.map(follow => tweets.map(tweet => (follow.user === tweet.user) && <TweetItem key={tweet._id} tweet={tweet} /> ))}
                </div>
                </div>
                <div className="col-md-3">
                <div className='mt-2 css-1dbjc4n r-1uaug3w r-1uhd6vh r-1ylenci r-1phboty r-rs99b7 r-ku1wi2 r-1bro5k0 r-1udh08x'>
                    <aside className='css-1dbjc4n'>
                        <div className='css-1dbjc4n r-1ila09b r-rull8r r-qklmqi r-1wtj0ep r-1j3t67a r-1w50u8q'>
                            <h2 aria-level="2" role="heading" class="css-4rbku5 css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep"><div dir="auto" class="css-901oao css-cens5h r-jwli3a r-1qd0xha r-1b6yd1w r-1vr29t4 r-ad9z0x r-bcqeeo r-qvutc0" style={{WebkitLineClamp: '3'}}><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Who to follow</span></div></h2>
                        </div>
                        <div className='css-1dbjc4n'>
                            {/* Profile Card */}
                            {profiles && profiles.map(prof => (
                                <div role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1ila09b r-rull8r r-qklmqi r-1ny4l3l r-1j3t67a r-1w50u8q r-o7ynqc r-6416eg" data-testid="UserCell">
                                    <div class="css-1dbjc4n r-18u37iz">
                                       <div class="css-1dbjc4n r-18kxxzh r-1777fci r-zso239" style={{flexBasis: '49px'}}>
                                          <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs">
                                             <Link to={`/profile/${prof.user._id}`} role="link" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-sdzlij r-1loqt21 r-1adg3ll r-ahm1il r-1ny4l3l r-1udh08x r-o7ynqc r-6416eg r-13qz1uu">
                                                <div class="css-1dbjc4n r-1adg3ll r-1udh08x">
                                                   <div class="r-1adg3ll r-13qz1uu" style={{paddingBottom: '100%'}}></div>
                                                   <div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
                                                      <div aria-label="" class="css-1dbjc4n r-sdzlij r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010">
                                                         <div class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${prof.user.avatar})` }}></div>
                                                         <img alt="" draggable="true" src={prof.user.avatar} class="css-9pa8cd" />
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="css-1dbjc4n r-1twgtwe r-sdzlij r-rs99b7 r-1p0dtai r-1mi75qu r-1d2f490 r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                                             </Link>
                                          </div>
                                       </div>
                                       <div class="css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci">
                                          <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                             <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs">
                                                <Link to={`/profile/${prof.user._id}`} role="link" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l">
                                                   <div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l">
                                                      <div class="css-1dbjc4n r-1awozwy r-18u37iz r-dnmrzs">
                                                         <div dir="auto" class="css-901oao css-bfa6kz r-jwli3a r-1qd0xha r-a023e6 r-vw2c0b r-ad9z0x r-bcqeeo r-3s2u2q r-qvutc0"><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">{prof.user.name}</span></span></div>
                                                         {/* <div dir="auto" class="css-901oao r-jwli3a r-18u37iz r-1q142lx r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0">
                                                            <svg viewBox="0 0 24 24" aria-label="Verified account" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                                                               <g>
                                                                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                                                               </g>
                                                            </svg>
                                                         </div> */}
                                                      </div>
                                                      <div class="css-1dbjc4n r-18u37iz r-1wbh5a2">
                                                         <div dir="ltr" class="css-901oao css-bfa6kz r-111h2gw r-18u37iz r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">@{prof.user.username}</span></div>
                                                      </div>
                                                   </div>
                                                </Link>
                                             </div>
                                             <div class="css-1dbjc4n r-1n0xq6e" style={{minWidth: '79px'}}>
                                                <button onClick={e => followProfile(prof.user._id)} role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1niwhzg r-p1n3y5 r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1vsu8ta r-aj3cln r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr" data-testid="723035335496626176-follow">
                                                   <div dir="auto" class="css-901oao r-1awozwy r-13gxpu9 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Follow</span></span></div>
                                                </button>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                            ))}

                        </div>
                    </aside>
                </div>     
                </div>               
            </div>
            </div>
        </Fragment>
    )
}

HomePage.propTypes = {
    getTweets: PropTypes.func.isRequired,
    tweet: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    getProfiles: PropTypes.func.isRequired,
    followProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tweet: state.tweet,
    profile: state.profile
});

export default connect(mapStateToProps, { getTweets, getCurrentProfile, getProfiles, followProfile })(HomePage)
