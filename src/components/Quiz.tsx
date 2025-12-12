import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Quiz as QuizType, Question } from '@/types/course';
import { CheckCircle2, XCircle, Trophy, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizProps {
  quiz: QuizType;
  onComplete: (passed: boolean, score: number) => void;
}

export function Quiz({ quiz, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
    const passed = correct >= quiz.passingScore;
    onComplete(passed, correct);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const question = quiz.questions[currentQuestion];
  const passed = score >= quiz.passingScore;

  if (showResults) {
    return (
      <div className="bg-card border-2 border-border p-8 text-center">
        <div className={cn(
          "w-20 h-20 mx-auto mb-6 flex items-center justify-center",
          passed ? "bg-primary" : "bg-destructive"
        )}>
          {passed ? (
            <Trophy className="w-10 h-10 text-primary-foreground" />
          ) : (
            <XCircle className="w-10 h-10 text-destructive-foreground" />
          )}
        </div>

        <h3 className="font-pixel text-lg mb-4 text-foreground">
          {passed ? "Level Up!" : "Game Over"}
        </h3>

        <p className="text-muted-foreground mb-6">
          You scored <span className={cn("font-pixel", passed ? "text-primary" : "text-destructive")}>{score}</span> out of {quiz.questions.length}
          <br />
          <span className="text-sm">
            (Passing score: {quiz.passingScore})
          </span>
        </p>

        {passed ? (
          <div className="space-y-4">
            <p className="text-primary">🎉 You've unlocked the next module!</p>
            <Button variant="hero" onClick={() => window.history.back()}>
              Continue Learning
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground">Review the article and try again!</p>
            <Button variant="accent" onClick={handleRetry}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-card border-2 border-border p-6">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
          <span className="font-pixel text-xs text-primary">
            {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-muted overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="font-pixel text-sm mb-6 text-foreground">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(index)}
            className={cn(
              "w-full text-left p-4 border-2 transition-all duration-200",
              selectedAnswers[currentQuestion] === index
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-6 h-6 flex items-center justify-center border-2 font-pixel text-xs",
                selectedAnswers[currentQuestion] === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted"
              )}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-sm">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <Button
          variant="hero"
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
        >
          {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "Submit Quiz"}
        </Button>
      </div>
    </div>
  );
}
