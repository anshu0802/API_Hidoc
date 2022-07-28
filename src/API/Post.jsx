import { useEffect } from 'react';
import axios from 'axios';
const Post = () => {
    useEffect(() => {
        const postTodo = () => {
            const data = {
                title: 'drink water',
                body: 'I should drink water',
                userId: 3,
            };
            const headers = { 'header-name': 'value' };
            const config = { headers, };
            axios
                .post(
                    ' http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid',
                    data,
                    config,
                )
                .then((response) => {
                    console.log(response.status);
                    console.log(response.data);
                })
                .catch((e) => console.log('something went wrong :(', e));
        };
        postTodo();
    }, []);
    return <div>
    <p>..</p>
</div>;
};
export default Post;