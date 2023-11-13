// components/Atom/specialization/index.js

const Specialization = ({ hashtags }) => {
    return (
        <div>
            {hashtags.slice(0, 3).map((tag, index) => ( // hashtag 최대 3개까지
                <span key={index}>
                    #{tag}{' '}
                </span>
            ))}
        </div>
    )
}

export default Specialization