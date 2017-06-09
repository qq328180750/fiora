import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from 'pure-render-decorator';

import Avatar from 'components/Avatar';

import 'styles/component/message.less';

@pureRender
export default class Message extends Component {
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        isSimple: PropTypes.bool,
    }
    static defaultProps = {
        isSimple: false,
    }
    render() {
        const { avatar, username, time, content, isSimple } = this.props;

        return (
            isSimple ?
                <div className="message-simple">{content}</div>
            :
                <div className="message">
                    <Avatar className="avatar" width={36} height={36} src={avatar} circular />
                    <div className="content">
                        <div>
                            <span>{username}</span>
                            <span className="time">{time}</span>
                        </div>
                        <div>{content}</div>
                    </div>
                </div>
        );
    }
}