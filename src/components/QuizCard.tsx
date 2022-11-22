import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Button, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { QuestionType } from '../data/questions';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

type CardType = {
    question: QuestionType;
}

export default function QuizCard({ question }: CardType) {
    const [expanded, setExpanded] = useState(false);
    const [choice, setChoice] = useState(-1);

    useEffect(() => {
        setExpanded(false);
        setChoice(-1);
    }, [ question, setExpanded, setChoice ]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        Q
                    </Avatar>
                }
                title={question.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {question.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Stack direction="row" spacing={2}>
                    {question.options.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => setChoice(question.options.indexOf(option))}
                        >
                            {option}
                        </Button>
                    ))}
                </Stack>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Hint:</Typography>
                    <Typography paragraph>
                        {question.hint}
                    </Typography>
                </CardContent>
            </Collapse>
            {choice >= 0
                ? choice === question.correct
                    ? (<Alert severity="success">Correct!</Alert>)
                    : (<Alert severity="error">Try again!</Alert>)
                : null}
        </Card>
    );
}