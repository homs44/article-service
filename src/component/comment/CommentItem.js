import React, { Component } from 'react';
import styled from 'styled-components';

const StyledComment = styled.div`
    margin: 8px 0;
    .header{
        display:flex;
        margin-bottom:4px;
        align-items:center;

        .image{
            width:24px;
            height:24px;
            border-radius:12px;
            background-image:url(${props => props.image});
            background-repeat:no-repeat;
            background-position:center center;
            background-size:cover;
        }
        .display-name{
            padding-left:8px;
        }
        .datetime{
            padding-left:8px;
            color:gray;
        }
    }
`

class CommentItem extends Component {

    static defaultProps = {
        id: null,
        userId: null,
        content: '',
        datetime: '',
        name: '',
        imageUrl: null
    }

    render() {
        const {
            imageUrl,
            name,
            datetime,
            content
        } = this.props;

        return (
            <StyledComment image={imageUrl}>
                <div className="header">
                    {imageUrl ? <div className="image" /> : null}
                    <div className="display-name">{name}</div>
                    <div className="datetime">{datetime}</div>
                </div>
                <div className="content">
                    {content}
                </div>
            </StyledComment>
        )
    }
}

export default CommentItem;