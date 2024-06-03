import { useState } from 'react'

export function TwitterFollowCard ({formatUserName, userName, name, initialIsFollowing}) {
    const imgSrc = `https://unavatar.io/${userName}`

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const handleClick = () =>
    setIsFollowing(!isFollowing)

    const btnText = isFollowing ? "Siguiendo" : "Seguir"
    const btnClassName = isFollowing 
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                src={imgSrc}
                alt="Profile avatar" />
                <div className='tw-followCard-info'>
                    <strong>
                        {name}
                    </strong>
                    <span
                    className='tw-followCard-userName'>
                        {formatUserName(userName)}
                        </span>
                </div>
            </header>
            <aside>
                <button className={btnClassName}
                onClick={handleClick}
                >{btnText}</button>
            </aside>
        </article>
    )
}