export default class Article {
    constructor(
        id,
        imageUrl,
        content,
        userId,
        userDisplayName,
        userProfileUrl,
        likeCnt,
        commentCnt,
        createdAt,
        updatedAt) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.content = content;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.userProfileUrl = userProfileUrl;
        this.likeCnt = likeCnt;
        this.commentCnt = commentCnt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}


