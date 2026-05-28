import '../css/MainPage.css'
import ChatBox from '../elements/ChatBox';
import LeftBarList from '../icons/LeftBarList';
function MainPage(){
    return (

        <div className='main-page-container'>
            <div className='left-container'>
                <LeftBarList />
            </div>
            <div className='middle-container'>
                <div className='middle-container-up'></div>
                <div className='middle-container-down'>
                    <ChatBox></ChatBox>
                </div>
            </div>
            <div className='right-container'></div>

        </div>
    )
}

export default MainPage;