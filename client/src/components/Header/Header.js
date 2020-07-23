import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import auth from '../../reducers/auth';

const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {

    const authLinks = (
        <div className='css-1dbjc4n r-jw8lkh r-e7q0ms'>
            <Link onClick={logout} style={{ textDecoration: 'none' }} to='/login' className='css-4rbku5 css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1waj6vr r-1loqt21 r-1w2pmg r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr r-o7ynqc r-6416eg r-lrvibr'>
                <div className='css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0' >
                    <span className='css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0' >
                        <div className="css-1dbjc4n r-xoduu5">
                        <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                            <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Logout</span>
                        </span>
                        </div>
                    </span>
                </div>
            </Link>
        </div>
    )

    const guestLinks = (
        <Fragment>
        <div className='css-1dbjc4n r-jw8lkh r-e7q0ms'>
            <Link style={{ textDecoration: 'none' }} to='/login' className='css-4rbku5 css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1waj6vr r-1loqt21 r-1w2pmg r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr r-o7ynqc r-6416eg r-lrvibr'>
                <div className='css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0' >
                    <span className='css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0' >
                        <div className="css-1dbjc4n r-xoduu5">
                        <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                            <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Login</span>
                        </span>
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        <div className='css-1dbjc4n r-jw8lkh r-e7q0ms'>
            <Link style={{ textDecoration: 'none' }} to='/register' className='css-4rbku5 css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1waj6vr r-1loqt21 r-1w2pmg r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr r-o7ynqc r-6416eg r-lrvibr'>
                <div className='css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0' >
                    <span className='css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0' >
                        <div className="css-1dbjc4n r-xoduu5">
                        <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">
                            <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Sign Up</span>
                        </span>
                        </div>
                    </span>
                </div>
            </Link>
        </div>
        </Fragment>
    )

    return (
        <Fragment>

                <div className="r-o96wvk">
                    <div className='css-1dbjc4n r-aqfbo4 r-1pi2tsx r-1xcajam r-ipm5af' >
                        <div className='css-1dbjc4n r-1pi2tsx r-1wtj0ep r-1rnoaur r-utggzx r-o96wvk'>
                            <div className='css-1dbjc4n r-1habvwh' >
                                <div class="css-1dbjc4n r-dnmrzs r-1vvnge1"><h1 role="heading" class="css-4rbku5 css-1dbjc4n r-1awozwy r-1pz39u2 r-1loqt21 r-6koalj r-16y2uox r-1777fci r-18qmn74"><a href="/home" aria-label="Twitter" role="button" data-focusable="true" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-1w2pmg r-1jayybb r-mtrfb5 r-1ny4l3l r-mk0yit r-o7ynqc r-6416eg r-lrvibr"><div dir="auto" class="css-901oao r-1awozwy r-13gxpu9 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><svg viewBox="0 0 24 24" class="r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg><span class="css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"></span></div></a></h1></div>
                                <div className='css-1dbjc4n r-d0pm55 r-1bymd8e r-13qz1uu' >
                                    <nav class="css-1dbjc4n r-1habvwh r-eqz5dr" >
                                        <Link style={{ textDecoration: 'none' }} to="/home" className='css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-oyd9sg r-13qz1uu'>
                                            <div className='css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1sp51qo r-o7ynqc r-6416eg' >
                                                <div className="css-1dbjc4n">
                                                    <svg viewBox="0 0 24 24" class="r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path><path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path></g></svg>
                                                </div>
                                                <div className='css-901oao css-bfa6kz r-jwli3a r-1qd0xha r-1b6yd1w r-vw2c0b r-ad9z0x r-1joea0r r-y3t9qe r-bcqeeo r-qvutc0'>
                                                    <span className='css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0'>Home</span>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} to="/profile/me" className='css-4rbku5 css-18t94o4 css-1dbjc4n r-1habvwh r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1ny4l3l r-oyd9sg r-13qz1uu'>
                                            <div className='css-1dbjc4n r-1awozwy r-sdzlij r-18u37iz r-1777fci r-dnmrzs r-1sp51qo r-o7ynqc r-6416eg' >
                                                <div className="css-1dbjc4n">
                                                <svg viewBox="0 0 24 24" class="r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path></g></svg>
                                                </div>
                                                <div className='css-901oao css-bfa6kz r-jwli3a r-1qd0xha r-1b6yd1w r-vw2c0b r-ad9z0x r-1joea0r r-y3t9qe r-bcqeeo r-qvutc0'>
                                                    <span className='css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0'>Profile</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </nav>
                                </div>
                                { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
                            </div>   
                            {/* <div className='css-1dbjc4n r-15d164r r-1x0uki6'>
                                <div className="css-1dbjc4n">
                                    <div role='button' className='css-18t94o4 css-1dbjc4n r-1awozwy r-sdzlij r-6koalj r-18u37iz r-1ny4l3l r-1sp51qo r-o7ynqc r-6416eg'>
                                        <div role='presentation' className='css-1dbjc4n r-sdzlij r-j66t93 r-1ny4l3l r-1udh08x r-eu2yb4'>
                                            <div className='css-1dbjc4n r-1adg3ll r-1udh08x' >
                                                <div className="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"></div>
                                                <div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu"><div aria-label="" class="css-1dbjc4n r-sdzlij r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010"><div class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style="backgroundImage: url(&quot;https://pbs.twimg.com/profile_images/1276874521505484802/TxbaaNkm_bigger.jpg&quot;);"></div><img alt="" draggable="true" src={user.avatar} class="css-9pa8cd"></img></div></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                </Fragment>
    )
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  })
  
  export default connect(mapStateToProps, { logout })(Header);
  