import './style.css'

import { useState } from 'react';
import Header from '../../components/Header';

export default function LikeDislike() {
    const [like, setLike] = useState(50);
    const [dislike, setDislike] = useState(2);

    const [likedClass, setLikedClass] = useState(false);
    const [dislikedClass, setDislikedClass] = useState(false);

    function actionLike() {
        setDislike(2)
        setDislikedClass(false)

        if (!likedClass) {
            setLike(like + 1)
            setLikedClass(true)
        } else {
            setLike(50)
            setLikedClass(false)
        }
    }

    function actionDislike() {
        setLike(50)
        setLikedClass(false)

        if (!dislikedClass) {
            setDislike(dislike + 1)
            setDislikedClass(true)
        } else {
            setDislike(2)
            setDislikedClass(false)
        }
    }

    return (
        <>
        <Header />
        <main>
            <section className="like-dislike">
                <h1>👍🏼Like 👎🏼Dislike</h1>

                <p>Like counter starts at 50 and dislike counter starts at 2:</p>

                <div className="group-buttons">
                    <button 
                        className={`like-button ${likedClass ? 'liked' : ''}`}
                        onClick={actionLike}>
                        Like | <span className="likes-counter">{like}</span>
                    </button>

                    <button 
                        className={`dislike-button ${dislikedClass ? 'disliked' : ''}`}
                        onClick={actionDislike}>
                        Dislike | <span className="dislikes-counter">{dislike}</span>
                    </button>
                </div>
            </section>
        </main>
        </>
    );
}