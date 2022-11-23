import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { questions } from '../data/questions';
import { shuffleQArrayInPlace } from '../utils/Utils';
import QuizCard from './QuizCard';
import './QuizView.css';

export default function QuizView() {
    const [remainingQuestions, setRemainingQuestions] = useState(() => {
        const copy = [...questions];
        shuffleQArrayInPlace(copy);
        return copy;
    });
    if (remainingQuestions.length <= 0) {
        return (
            <div>No more questions! 😢</div>
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
