import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return(
        
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            initialIsFollowing={true} name="Rafael Botella" userName="rafabo7"/>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            initialIsFollowing={true} name="Josefine Jer" userName="josefina4"/>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            initialIsFollowing={false} name="Clarita Martínez" userName="claritaxfabor"/>
        </section>
        
        )
    }