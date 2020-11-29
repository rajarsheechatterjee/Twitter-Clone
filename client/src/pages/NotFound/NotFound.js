import React from "react";

import Header from "../../components/Header/Header";
import PageHeaderWithBack from "../../components/PageHeaderWithBack/PageHeaderWithBack";

const NotFound = ({ history }) => (
    <div className="row">
        <Header />
        <div className="col-md-6">
            <div className="timeline-container">
                <PageHeaderWithBack history={history} title="Page Not Found" />
                <div className="no-bookmarks">
                    <div className="bookmark-header">
                        Sorry, that page doesn’t exist!
                    </div>
                    <div className="bookmarks-subtext">
                        Why not try a search to find something else?
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default NotFound;
