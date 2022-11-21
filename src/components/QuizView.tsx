import Button from '@mui/material/Button';
import QuizCard from './QuizCard';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { questions } from '../data/questions';

export default function QuizView() {
    const [questionIndex, setQuestionIndex] = useState(0);
    return (
        <Container maxWidth='sm'>
            <QuizCard question={questions[questionIndex]} />
            <Button
                variant='contained'
                onClick={() => setQuestionIndex(questionIndex - 1)}
            >
                Previous Question
            </Button>
            <Button
                variant='contained'
                onClick={() => setQuestionIndex(questionIndex + 1)}
            >
                Next Question
            </Button>
        </Container>
    );
}
