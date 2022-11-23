import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { questions, QuestionType } from '../data/questions';
import QuizCard from './QuizCard';
import './QuizView.css';

function shuffleQuestionsInPlace(array: QuestionType[]) {
    console.debug('shuffle');
    for (let index = array.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }
}

export default function QuizView() {
    const [remainingQuestions, setRemainingQuestions] = useState(() => {
        const copy = [...questions];
        shuffleQuestionsInPlace(copy);
        return copy;
    });
    if (remainingQuestions.length <= 0) {
        return (
            <div>no more questions 😢</div>
        );
    }
    const currentQuestion = remainingQuestions[0];
    return (
        <Container maxWidth='sm'>
            <QuizCard question={currentQuestion} questionIndex={questions.indexOf(currentQuestion)} />
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
