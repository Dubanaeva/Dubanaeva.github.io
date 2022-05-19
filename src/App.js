import './App.css';
import QuestionCard from './components/QuestionCard';

const buttons = [
    {
        name: '3',
        isCorrect: false,
    },
    {
        name: '2',
        isCorrect: true,
    },
    {
        name: '0',
        isCorrect: false,
    },
    {
        name: '4',
        isCorrect: false,
    }
]

function App() {
    return (
        <div >
            <div className='container flex flex-col mx-auto'>
                <div className='flex items-center h-screen justify-center flex-col'>
                    <QuestionCard buttons={buttons}
                    imageUrl="https://digitaldefynd.com/wp-content/uploads/2020/07/Best-Abstract-Art-course-tutorial-class-certification-training-online-scaled.jpg"
                    question="1+1"
                    countdownUntil={Date.now() + 30000}
                    />
                </div>
            </div>
        </div>

    );
}

export default App;
