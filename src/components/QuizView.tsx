import './QuizView.css';
import Button from '@mui/material/Button';
import QuizCard from './QuizCard';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { questions, QuestionType } from '../data/questions';
import { Box } from '@mui/material';

function shuffleQuestionsInPlace(array: QuestionType[]) {
    for (let index = array.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }
}

export default function QuizView() {
    const [remainingQuestions, setRemainingQuestions] = useState([...questions]);
    useEffect(() => {
        shuffleQuestionsInPlace(remainingQuestions);
        setRemainingQuestions([...remainingQuestions]);
        console.debug('Shuffled questions');
    }, []);
    if (remainingQuestions.length <= 0) {
        return (
            <div>no more questions</div>
        );
    }
    return (
        <Container maxWidth='sm'>
            <QuizCard question={remainingQuestions[0]} />
            <Box className='View-button'>
                <Button
                    variant='contained'
                    onClick={() => setRemainingQuestions(remainingQuestions.slice(1))}
                >
                    Next Question
                </Button>
            </Box>
        </Container>
    );
}
