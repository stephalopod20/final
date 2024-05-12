import './Home.css';

import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='home'>
            <h1>IT'S THE HOME<s>page</s>"STRETCH"!!</h1>
            <h2>Finally, the Final Hours!</h2>
            <br></br>
            <Link to='/todos'>
                <button>Click for your neglected tasks!</button>
            </Link>
        </div>
    );
}

export default Home;