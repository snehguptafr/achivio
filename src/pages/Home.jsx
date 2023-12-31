import './css_files/body_rm.css';
import './css_files/About.css';
import RoadMap from '../components/RoadMap';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    document.title = "Achivio"
    return (
        <div className='mainDiv'>

            <Header />

            <div className='body-sec' id='HOME'>
                <div className='text-based'> {/* Tagline, perks, and button */}
                    <h2 className='tagline'>Unlock your potential, <br></br>
                        <span className='special-letters'>One checkpoint</span> at a time.</h2>
                    <ul className='perks-list'>
                        <li id='perk-1'>Goal tracking</li>
                        <li id='perk-2'>Plan and Organize</li>
                        <li id='perk-3'>Progress Visualization</li>
                        <li id='perk-4'>Self Accountability</li>
                    </ul>
                    <button className="CTA" onClick={()=>{navigate("/show")}}>
                        Let's go!
                    </button>
                </div>

                <div className='static-rm'>
                    <RoadMap />
                </div>

            </div>

            <section className='about-sec'>

                <div className="top-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,
                        31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"></path>
                    </svg>
                </div>

                <h1 className='sec-heading' id='ABOUT'>About</h1>
                <p className='explanation'> <span id='welcome'>Welcome to <span id='app-name'>#Achivio!</span>🎉</span><br /><br />
                    We understand the importance of setting goals and staying on track towards achieving them.
                    Achivio empowers you to create personalized roadmaps by entering checkpoints or milestones along your journey.
                    Visualize your progress through an <span className='itallian'>interactive flowchart</span> generated based on your inputs. <br /><br />

                    As you mark each checkpoint as completed, you'll not only experience a sense of accomplishment but also receive little trees as rewards –
                    symbolizing <span className='itallian'>growth and progress</span>. Watch your forest flourish as you conquer each milestone. <br /><br />

                    Once you reach 100% completion, we'll also present you with a <span className='itallian'>personalized certificate</span> to celebrate your achievements.
                    Start mapping your path to success and cultivating your own forest of accomplishments today!</p>

            </section>

            <Footer />

        </div>
    );
}

export default App;