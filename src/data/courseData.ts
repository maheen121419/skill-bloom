import { Module, Instructor } from "@/types/course";

export const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Exploratory Testing",
    description: "Learn the fundamentals of exploratory testing and why it's essential for quality software.",
    isUnlocked: true,
    isCompleted: false,
    articleContent: `
# Introduction to Exploratory Testing

Exploratory testing is an approach to software testing that emphasizes the personal freedom and responsibility of individual testers. It's simultaneously a way to learn, a way to design tests, and a way to execute tests.

## What is Exploratory Testing?

Unlike scripted testing, where tests are designed and documented before execution, exploratory testing involves:

- **Simultaneous Learning**: You learn about the software as you test it
- **Test Design**: You design tests on-the-fly based on what you discover
- **Test Execution**: You execute tests immediately as you design them

## Key Principles

### 1. Charter-Based Testing
Create a focused mission for your testing session. For example: "Explore the login functionality looking for security vulnerabilities."

### 2. Time-Boxing
Set specific time limits for your testing sessions (usually 60-90 minutes) to maintain focus and energy.

### 3. Note-Taking
Document your findings, questions, and observations as you test. This helps with:
- Remembering what you tested
- Sharing knowledge with the team
- Creating regression test cases

## Benefits of Exploratory Testing

1. **Finds More Bugs**: Testers can adapt and explore areas that scripted tests might miss
2. **Faster Feedback**: No need to write detailed test cases upfront
3. **Better Coverage**: Testers think creatively and cover edge cases
4. **Improved Skills**: Testers develop deeper product knowledge

## When to Use Exploratory Testing

- Early in development when requirements are unclear
- After major changes to quickly assess impact
- When time is limited
- To supplement automated testing

Ready to test your knowledge? Take the quiz below!
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is a key characteristic of exploratory testing?",
          options: [
            "Tests are designed and documented weeks in advance",
            "Simultaneous learning, test design, and execution",
            "Only automated tests are used",
            "Following strict test scripts"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "What is 'time-boxing' in exploratory testing?",
          options: [
            "Testing only during business hours",
            "Setting specific time limits for testing sessions",
            "Packaging test results in boxes",
            "Testing the time-related features only"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "When is exploratory testing most useful?",
          options: [
            "Only in production environments",
            "When requirements are perfectly documented",
            "Early in development when requirements are unclear",
            "Only for mobile applications"
          ],
          correctAnswer: 2
        }
      ],
      passingScore: 2
    }
  },
  {
    id: 2,
    title: "Session-Based Test Management",
    description: "Master the art of organizing and tracking your exploratory testing sessions.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# Session-Based Test Management (SBTM)

Session-Based Test Management is a method for measuring and managing exploratory testing. It provides structure while maintaining the flexibility that makes exploratory testing powerful.

## What is a Testing Session?

A session is an uninterrupted period of testing, typically lasting 60-120 minutes. Each session has:

- **Charter**: A mission statement describing what to test and why
- **Time Box**: A fixed duration for the session
- **Tester**: The person conducting the session

## Session Components

### 1. Session Sheet
Document your session with:
- Start and end times
- Charter/mission
- Areas tested
- Bugs found
- Questions raised
- Notes and observations

### 2. Debriefing
After each session:
- Review findings with the team
- Discuss coverage and risks
- Plan follow-up sessions

## Metrics in SBTM

Track your testing with these metrics:

- **Session Time**: Total time spent in sessions
- **Bug Count**: Number of issues discovered
- **Coverage**: Percentage of the product explored
- **Charter Completion**: Did you accomplish your mission?

## Best Practices

1. Keep sessions focused on a single area or feature
2. Take breaks between sessions
3. Vary your testing approaches
4. Collaborate with developers
5. Use tools to capture evidence

Now you're ready to structure your exploratory testing!
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is a typical duration for an exploratory testing session?",
          options: [
            "5-10 minutes",
            "60-120 minutes",
            "8 hours",
            "1 week"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "What is a 'charter' in SBTM?",
          options: [
            "A legal document",
            "A mission statement describing what to test",
            "A type of bug report",
            "A testing tool"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What should happen after each testing session?",
          options: [
            "Delete all notes",
            "Take a one-week break",
            "Debriefing to review findings",
            "Write no documentation"
          ],
          correctAnswer: 2
        }
      ],
      passingScore: 2
    }
  },
  {
    id: 3,
    title: "Bug Hunting Techniques",
    description: "Develop advanced skills for finding bugs that others miss.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# Advanced Bug Hunting Techniques

Great exploratory testers develop a toolkit of techniques for finding elusive bugs. This module covers advanced strategies for uncovering hidden defects.

## Heuristics for Bug Hunting

### 1. Boundary Testing
Test at the edges:
- Minimum and maximum values
- Empty fields
- Very long inputs
- Special characters

### 2. State Transitions
Explore how the application moves between states:
- Login → Dashboard → Logout
- Create → Edit → Delete
- Valid → Invalid → Valid again

### 3. Error Handling
Deliberately cause errors:
- Invalid inputs
- Network disconnection
- Concurrent operations
- Resource exhaustion

## The SFDPOT Heuristic

Use this mnemonic to explore testing dimensions:

- **S**tructure: How is it built?
- **F**unction: What does it do?
- **D**ata: What data does it process?
- **P**latform: What does it depend on?
- **O**perations: How will it be used?
- **T**ime: How does time affect it?

## Common Bug Patterns

### Race Conditions
Actions performed simultaneously can cause unexpected behavior.

### Off-by-One Errors
Look for issues at array boundaries and loop limits.

### Unicode Issues
Test with international characters and emojis.

### Security Vulnerabilities
- SQL injection
- Cross-site scripting
- Authentication bypass

## Documentation Tips

When you find a bug:
1. Capture the exact steps to reproduce
2. Note the expected vs. actual behavior
3. Gather evidence (screenshots, logs)
4. Rate severity and priority

You're now equipped with powerful bug hunting techniques!
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What does the 'S' in SFDPOT stand for?",
          options: [
            "Security",
            "Structure",
            "Speed",
            "Software"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which is a boundary testing technique?",
          options: [
            "Testing only happy paths",
            "Testing minimum and maximum values",
            "Testing only in production",
            "Testing without documentation"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What should you include when documenting a bug?",
          options: [
            "Only your personal opinion",
            "Steps to reproduce and evidence",
            "Nothing, just remember it",
            "Only the bug title"
          ],
          correctAnswer: 1
        }
      ],
      passingScore: 2
    }
  },
  {
    id: 4,
    title: "Exploratory Testing Tools",
    description: "Learn about tools that enhance your exploratory testing workflow.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# Essential Exploratory Testing Tools

The right tools can significantly enhance your exploratory testing efficiency. This module covers tools every exploratory tester should know.

## Screen Recording Tools

### Why Record?
- Capture exact reproduction steps
- Share bugs with developers
- Document your testing journey

### Popular Options
- OBS Studio (Free, cross-platform)
- Loom (Easy sharing)
- Built-in OS recorders

## Note-Taking Tools

### Session Notes
Keep track of:
- What you tested
- What you found
- Questions for later

### Recommended Tools
- Notion
- Obsidian
- RapidReporter

## Browser DevTools

Essential for web testing:
- **Network tab**: Monitor API calls
- **Console**: Check for JavaScript errors
- **Elements**: Inspect and modify DOM
- **Application**: View storage and cookies

## API Testing Tools

- Postman
- Insomnia
- curl

## Accessibility Tools

- axe DevTools
- WAVE
- Color contrast analyzers

## Performance Tools

- Lighthouse
- WebPageTest
- Chrome Performance tab

## Mind Mapping

Visualize your testing coverage:
- XMind
- Miro
- draw.io

## Best Practices

1. **Don't over-tool**: Use only what helps
2. **Learn shortcuts**: Speed up your workflow
3. **Customize**: Adapt tools to your needs
4. **Share knowledge**: Help your team learn

With these tools, you're ready to test more effectively!
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "Why should you record your testing sessions?",
          options: [
            "To post on social media",
            "To capture reproduction steps and share bugs",
            "Recording is never useful",
            "Only for compliance"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which browser DevTools tab shows API calls?",
          options: [
            "Elements",
            "Sources",
            "Network",
            "Security"
          ],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "What is a best practice when using testing tools?",
          options: [
            "Use every tool available",
            "Never use any tools",
            "Use only what helps, don't over-tool",
            "Only use paid tools"
          ],
          correctAnswer: 2
        }
      ],
      passingScore: 2
    }
  },
  {
    id: 5,
    title: "Testing in Agile Teams",
    description: "Integrate exploratory testing into agile development workflows.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# Exploratory Testing in Agile

Agile development moves fast. Learn how to integrate exploratory testing into sprints and deliver quality at speed.

## The Agile Testing Mindset

### Shift Left
Start testing early:
- Review user stories
- Participate in refinement
- Test in development environments

### Continuous Quality
Quality is everyone's responsibility:
- Developers test their code
- Testers provide expertise
- Team shares knowledge

## Exploratory Testing in Sprints

### Sprint Planning
- Identify testing needs
- Estimate testing effort
- Plan session charters

### During the Sprint
- Test stories as they're completed
- Provide rapid feedback
- Document and track bugs

### Sprint Review
- Demo testing findings
- Discuss quality metrics
- Plan improvements

## Pairing and Mobbing

### Pair Testing
- Tester + Developer
- Share knowledge
- Find bugs faster

### Mob Testing
- Whole team explores together
- Different perspectives
- Great for complex features

## Automation Support

Exploratory testing and automation work together:
- Automate repetitive checks
- Free up time for exploration
- Use automation to set up test data

## Continuous Integration

- Test in CI/CD pipelines
- Catch regressions early
- Maintain deployment velocity

## Metrics for Agile Teams

- Bug escape rate
- Time to find bugs
- Coverage per sprint
- Team confidence score

You're now ready to bring exploratory testing to your agile team!
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What does 'Shift Left' mean in agile testing?",
          options: [
            "Move testing to the left side of the screen",
            "Start testing early in the development process",
            "Only test on left-handed devices",
            "Skip testing entirely"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "What is 'pair testing'?",
          options: [
            "Testing in pairs of two applications",
            "A tester and developer testing together",
            "Testing twice",
            "Using two monitors"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "How do automation and exploratory testing work together?",
          options: [
            "They don't, choose one or the other",
            "Automate everything, skip exploration",
            "Automate repetitive checks, free up time for exploration",
            "Only use automation in production"
          ],
          correctAnswer: 2
        }
      ],
      passingScore: 2
    }
  }
];

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior QA Engineer",
    bio: "With over 10 years of experience in software testing, Sarah has led quality initiatives at Fortune 500 companies. She's passionate about exploratory testing and believes in the power of curiosity-driven quality assurance.",
    image: ""
  },
  {
    id: 2,
    name: "Marcus Thompson",
    title: "Testing Architect",
    bio: "Marcus is a testing thought leader who has trained thousands of testers worldwide. He specializes in test strategy, automation, and building quality-focused cultures. When not testing, he speaks at conferences globally.",
    image: ""
  }
];
