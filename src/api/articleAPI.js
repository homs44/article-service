import firebase from 'firebase';
import uuid from 'uuid';
import Article from '../model/Article';

export function addArticle({ file, content, userId, userDisplayName, userProfileUrl }) {

    const filename = uuid.v1();
    const extension = file.name.split('.').pop();
    const url = `articles/${filename}.${extension}`;

    const articleRef = firebase.storage().ref().child(url);
    return articleRef.put(file)
        .then((snapshot) => {
            return snapshot.ref.getDownloadURL();
        })
        .then((downloadUrl) => {
            const articleId = uuid.v1();
            // const article = new Article(
            //     articleId,
            //     downloadUrl,
            //     content,
            //     userId,
            //     userDisplayName,
            //     userProfileUrl,
            //     0,
            //     0,
            //     new Date(),
            //     new Date()
            // );
            return firebase.firestore().collection('articles').doc(articleId).set({
                id: articleId,
                downloadUrl,
                content,
                userId,
                userDisplayName,
                userProfileUrl,
                likeCnt: 0,
                commentCnt: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        })

}
