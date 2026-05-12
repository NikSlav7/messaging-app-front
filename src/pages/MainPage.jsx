import '../css/MainPage.css'
import LeftBarList from '../icons/LeftBarList';
function MainPage(){
    return (

        <div className='main-page-container'>
            <div className='left-container'>
                <LeftBarList />
            </div>
            <div className='middle-container'></div>
            <div className='right-container'></div>

        </div>
    )
}

export default MainPage;