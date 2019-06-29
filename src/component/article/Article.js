import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid #eee;
    margin-bottom:16px;
    &:hover{
        cursor:pointer;
        box-shadow:2px 2px 10px #eee;
    }
`

const StyledHeader = styled.div`
    display:flex;
    padding:16px;
    align-items:center;

    .user-image{
        width:36px;
        height:36px;
        background-image: url(${props => props.profileImageUrl});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 36px 36px;
        border-radius:18px;
    }

    .user-display-name{
        color:gray;
        padding-left:16px;
    }

    .datetime{
        flex-grow:1;
        text-align:right;
        color:gray;
    }
`
const StyledContent = styled.div`
    .image{
        height:300px;
        background-image: url(${props => props.imageUrl});
        background-repeat:no-repeat;
        background-size:cover;
        background-position: center center;
    }
    .content{
        padding:16px;
    }
`

const StyledActions = styled.div`
    padding: 0 16px 16px 16px;
`
const StyledAction = styled.span`
    color:gray;
    .count {
        margin-left: 8px;
        margin-right:16px;
    }
`

class Article extends Component {

    static defaultProps = {
        id: null,
        downloadUrl: null,
        content: null,
        commentCnt: 0,
        likeCnt: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        userDisplayName: null,
        userId: null,
        userProfileUrl: null,
    }

    render() {
        const {
            userDisplayName,
            userProfileUrl,
            createdAt,
            content,
            downloadUrl,
            likeCnt,
            commentCnt,
            displayTimestamp,
        } = this.props;

        console.log(this.props.id);

        return (
            <StyledCard onClick={this.onClick}>
                <StyledHeader profileImageUrl={userProfileUrl}>
                    <div className="user-image"></div>
                    <div className="user-display-name">{userDisplayName}</div>
                    <div className="datetime">{displayTimestamp}</div>
                </StyledHeader>
                <StyledContent imageUrl={downloadUrl}>
                    <div className="image"></div>
                    <div className="content">{content}</div>
                </StyledContent>

                <StyledActions>
                    <StyledAction>
                        <span>좋아요</span>
                        <span className="count">{likeCnt}</span>
                    </StyledAction>
                    <StyledAction>
                        <span>댓글</span>
                        <span className="count">{commentCnt}</span>
                    </StyledAction>
                </StyledActions>
            </StyledCard>
        );
    }
}

export default Article;