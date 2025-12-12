import { Module, Instructor } from "@/types/course";

export const modules: Module[] = [
  {
    id: 1,
    title: "Getting Started with Testing",
    description: "Welcome to Test IO Academy! Learn the basics and what you need before you start testing.",
    isUnlocked: true,
    isCompleted: false,
    articleContent: `
# Welcome to Test IO Academy!

We are so happy you have decided to join our tester community!

This quick start guide is meant to cover the basics and enable you to be successful in your testing journey.

## What is Software Testing?

When a development team works on a project, unintentional behaviors can be added to the product. The tester's job consists of testing products simulating a real user looking for these development errors, called **bugs**, validating implementations, and checking the product health based on the original product requirements.

## Your Role as a Tester

As a tester, you will work with crowd-testing on web, mobile, and IoT products. Your main goal is to deliver the best results based on customers' interests and requirements for each test cycle.

## Key Concepts

### What is a Bug?

A bug is a software-related problem. If something on a website or in an application does not work as it was intended to, this "error" is called a bug.

### Types of Testing

- **Exploratory Testing**: Freely explore the application to find bugs
- **Test Case Testing**: Follow specific test cases to verify functionality
- **Regression Testing**: Verify that new changes haven't broken existing features

## The Testing Process

1. **Receive Test Invitations**: You'll be invited to test cycles that match your profile
2. **Accept the Test**: Review the test scope and accept if you can participate
3. **Read Instructions**: Carefully review all test requirements
4. **Start Testing**: Begin exploring the application within the defined scope
5. **Report Bugs**: Document any issues you find following the proper format
6. **Get Paid**: Earn money for approved bug reports

## Setting Up for Success

Before you start testing, make sure you have:

- A reliable internet connection
- Updated browsers and devices
- Screen recording software installed
- A quiet environment for recording

Now you're ready to learn about the different types of bugs!
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is a bug in software testing?",
          options: [
            "A new feature that needs to be added",
            "A software-related problem where something doesn't work as intended",
            "A request from the customer",
            "A type of insect that affects computers"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "What is the main goal of a software tester?",
          options: [
            "To write new code for the application",
            "To find development errors by simulating a real user",
            "To design the user interface",
            "To manage the development team"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What should you do before starting a test cycle?",
          options: [
            "Start testing immediately",
            "Read the test instructions carefully",
            "Skip the scope and requirements",
            "Report random bugs"
          ],
          correctAnswer: 1
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 2,
    title: "Types of Bugs",
    description: "Learn about the different categories of bugs: Functional, Content, Visual, and Usability.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# Types of Bugs

A bug is a software-related problem. If something on a website or in an application does not work as it was intended to, this "error" is called a bug. Here are the main categories:

## 1. Functional Bugs

Functional bugs are related to the **functionality** of a piece of software.

### Examples:
- A button doesn't submit a form
- The search doesn't react to user input
- The app crashes
- A feature doesn't work as expected

### Severity Levels:

**LOW:** Minimal impact on product usage. An easy workaround exists.

**HIGH:** Serious impact but main functionality is intact. No workaround exists.

**CRITICAL:** Prevents core functionality. A showstopper that blocks main processes.

## 2. Content Bugs

Content bugs relate to the actual content of websites or apps: text, labels, pictures, videos, icons, links, data, etc.

### Examples:
- Broken links or images (404s)
- Missing text or empty tooltips
- Missing translations
- Missing data

### Important: When a content problem occurs repetitively, it may only be submitted **once**.

## 3. Visual Bugs

Visual bugs relate to the graphical user interfaces of websites or apps.

### Examples:
- Misaligned texts or elements
- Responsive design problems
- Text/elements overlapping each other
- Text/elements being cut off

## 4. Usability Suggestions

These are not bugs but suggestions for improvement. If a feature works consistently but could be better, it's a usability suggestion.

## What's NOT a Bug?

- Spelling bugs (unless specifically requested)
- Security bugs (e.g., XSS attacks)
- Forced bugs (caused by non-typical behavior)
- Browser or OS bugs
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "Which type of bug occurs when a button doesn't submit a form?",
          options: [
            "Content Bug",
            "Visual Bug",
            "Functional Bug",
            "Usability Suggestion"
          ],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "What severity level is appropriate for a bug that prevents the checkout process?",
          options: [
            "Low",
            "Medium",
            "High",
            "Critical"
          ],
          correctAnswer: 3
        },
        {
          id: 3,
          question: "A broken image on a website is typically classified as what type of bug?",
          options: [
            "Functional Bug",
            "Content Bug",
            "Visual Bug",
            "Critical Bug"
          ],
          correctAnswer: 1
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 3,
    title: "Bug Report Requirements",
    description: "Master the art of writing clear, professional bug reports that get approved.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# Bug Report Requirements

Writing a good bug report is essential for getting your work approved.

## Bug Report Must Include:
- **Severity** (for functional bugs): Low, High, or Critical
- **Title**: What happened, where, and when
- **URL**: The page where the bug occurs
- **Steps to Reproduce**: How to trigger the bug
- **Actual Result**: What happened after the steps
- **Expected Result**: What should have happened
- **Attachments**: Screenshots or screencasts as evidence
- **Environment**: Device and browser used

## Title Rules

The title should answer: **WHAT, WHERE, WHEN**

❌ **Wrong**: "Error shown on the Cart page"
✅ **Correct**: "'Checkout' button from the Cart page navigates users to an 'Error 500' page"

## Steps to Reproduce

- **First step**: Access the landing page URL or open the app
- **Middle steps**: Actions taken to reach the bug
- **Last step**: The action that triggers the bug (NOT "observe")

### Good Example:
1. Go to http://www.example.com
2. Enter a search query in the search bar
3. Click on "Search Now" button
4. Select "Sort by price: High to Low"

## Actual Result vs Expected Result

- **Actual Result**: Detailed description of what actually happens
- **Expected Result**: What should have happened if everything worked correctly

Both must be detailed and NOT just opposites of each other.
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "A bug report title should answer which three questions?",
          options: [
            "Who, Why, How",
            "What, Where, When",
            "Before, During, After",
            "Start, Middle, End"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Why is 'Observe' NOT acceptable as a step?",
          options: [
            "It's too long",
            "It's not an action taken by the user",
            "It's spelled wrong",
            "It's too technical"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What should the first step in 'Steps to Reproduce' contain?",
          options: [
            "The bug description",
            "The word 'Observe'",
            "An indication to access the landing page URL or open the app",
            "The expected result"
          ],
          correctAnswer: 2
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 4,
    title: "Bug Report Attachments",
    description: "Learn how to create professional screenshots and screencasts for your bug reports.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# Bug Report Attachments

Each bug must be documented with at least one attachment as proof.

## Screenshot or Screencast?

### Screencast Required When:
- An action is required to trigger the bug
- It's a functional bug (always requires screencast)

### Screenshot Sufficient When:
- The bug is static (no action needed)
- It's a visual or content bug

## General Requirements

### Must Have:
- New attachments for every bug report
- Date and time visible
- URL field visible (for website tests)
- High resolution

### Must NOT Have:
- Information about other customers
- Personal or unprofessional data
- Noise in recordings

## Screencast Requirements

- **Format**: MP4 only
- **Maximum size**: 25 MB
- **Maximum length**: 60 seconds for bug reports
- Clicks/taps must be visible
- Mouse cursor must be visible

## Screenshot Requirements

- **Format**: JPG or PNG
- **Highlight** the bug on your screenshot
- Date and time visible
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What file format must screencasts be in?",
          options: ["AVI", "MOV", "MP4", "WMV"],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "What is the maximum length for a bug report screencast?",
          options: ["30 seconds", "60 seconds", "90 seconds", "120 seconds"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What must be visible in every attachment?",
          options: ["Your personal email", "Other browser tabs", "Current date and time", "Your bookmarks"],
          correctAnswer: 2
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 5,
    title: "Exploratory Testing",
    description: "Master the art of exploratory testing - finding bugs through creative exploration.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# Exploratory Testing

Exploratory testing is a software testing technique where you actively explore the application to identify defects using creativity and intuition.

## What Makes Exploratory Testing Different?

- Does NOT rely on pre-written test cases
- Emphasizes the tester's creativity
- Is performed in an ad-hoc manner
- Focuses on investigating different parts of the software

## Key Characteristics:
- **Creative Freedom**: Explore as you see fit
- **Time-Limited**: Tests typically run 2-24 hours
- **Scope-Defined**: Specific areas may be in scope
- **Black Box Testing**: Limited information about the system

## How to Be Successful

1. **Creativity**: Think outside the box
2. **Curiosity**: Ask "What happens if I...?"
3. **Attention to Detail**: Notice small inconsistencies
4. **Understanding User Perspective**: Think like a real user
5. **Systematic Approach**: Be methodical even while exploring

## The Process

### Before the Test:
1. Read all test instructions
2. Understand the scope
3. Set up your devices and tools

### During the Test:
1. Access the test environment
2. Start a test session
3. Explore systematically
4. Document bugs you find

### After Finding a Bug:
1. Verify it's reproducible
2. Check it's within scope
3. Document it properly
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is the main characteristic of exploratory testing?",
          options: [
            "Following strict test scripts",
            "Actively exploring with creativity and intuition",
            "Only testing pre-defined scenarios",
            "Automated testing only"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "How long do typical test cycles run?",
          options: ["1 week", "2-24 hours", "1 month", "1 year"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What does 'black box testing' mean?",
          options: [
            "Testing in a dark room",
            "Testing with full access to source code",
            "Testing with limited information about the system",
            "Testing only black-colored elements"
          ],
          correctAnswer: 2
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 6,
    title: "The Test Process",
    description: "Understand the complete testing workflow from receiving invitations to getting paid.",
    isUnlocked: false,
    isCompleted: false,
    articleContent: `
# The Test Process

Understanding the complete test process will help you succeed and earn money for approved bug reports.

## Test Invitations

When a customer submits a test, the system matches testers based on:
- Profile information
- Available devices
- Individual performance

**Tip**: Add all your devices to increase invitations.

## Tester Levels

- **Level 1 (Copper)**: Can participate in 2 test cycles at once
- **Level 2+ (Bronze and above)**: Can join unlimited tests

## Participating in a Test

### Before the Test:
1. Read all instructions
2. Understand the scope
3. Prepare your devices

### When the Test Begins:
1. Access the test environment
2. Start a Test Session
3. Begin bug hunting

## Submitting Bugs

1. Start a Test Session (required)
2. Click "Submit Bug"
3. Select the correct Feature
4. Fill in all fields
5. Add attachments
6. Submit

## Review Process

1. **Team Leader Review**: Approves or rejects reports
2. **Customer Review**: Makes final decision

## Getting Paid

You get paid for approved bug reports based on:
- Bug type
- Severity level
- Test type
    `,
    quiz: {
      questions: [
        {
          id: 1,
          question: "How many test cycles can a Level 1 (Copper) tester participate in at once?",
          options: ["1", "2", "5", "Unlimited"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "What is required before you can submit a bug?",
          options: ["Team leader approval", "Customer permission", "Starting a Test Session", "Finding at least 5 bugs"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "Who makes the final decision on bug reports?",
          options: ["Other testers", "The team leader only", "The customer", "The tester who submitted it"],
          correctAnswer: 2
        }
      ],
      passingScore: 80
    }
  }
];

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior QA Engineer & Testing Mentor",
    bio: "With 10+ years of experience in software testing across Fortune 500 companies, Sarah brings real-world expertise to the academy. She specializes in exploratory testing methodologies and has trained over 500 testers worldwide.",
    image: ""
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Test Automation Lead & Bug Hunting Expert",
    bio: "Marcus is a passionate advocate for quality software. Starting as a crowdsource tester, he now leads testing initiatives for major tech companies. He's known for finding critical bugs that others miss.",
    image: ""
  }
];
