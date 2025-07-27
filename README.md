# RoommateHub

RoommateHub is an academic full-stack web application that helps roommates manage shared household expenses and chores in one place.

## Problem

Roommates typically track shared expenses and household chores separately (or not at all), which leads to forgotten payments, unequal workloads, and disagreements. RoommateHub combines both into a single, simple platform.

## Core Features (planned)

- **Authentication** — registration, login, and JWT-based session handling
- **Household Management** — create/join a household, manage members
- **Expense Management** — record shared expenses and split them (equal, percentage, or custom)
- **Balance Calculation** — see who owes whom, at a glance
- **Settlements** — record and track payments between roommates
- **Chore Management** — create, assign, and track household chores
- **Dashboard** — a household overview of balances, chores, and recent activity

## Technology Stack

| Layer          | Technology                     |
|----------------|---------------------------------|
| Frontend       | React                           |
| Backend        | Node.js, Express.js             |
| Database       | MongoDB with Mongoose           |
| Authentication | JWT, bcrypt/bcryptjs             |

## Project Status

This project is being developed incrementally, one small feature at a time, with the development history tracked through Git commits. See the commit log for the current state of development.

## Development Approach

This is an academic project built as a series of small, independently testable increments (authentication → household management → expenses → balances → settlements → chores → dashboard → refinement). Each step is implemented, verified, and committed separately so the project's evolution is easy to follow and explain.
