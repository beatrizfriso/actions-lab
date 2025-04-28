# CI/CD Pipeline Documentation

## Overview

This repository utilizes a comprehensive CI/CD (Continuous Integration/Continuous Delivery) pipeline implemented with GitHub Actions to automate testing, building, and deployment processes with a required approval step before production deployment.

## Pipeline Workflow

The automated workflow is triggered on every push to the `main` branch and consists of the following stages:

### 1. Conventional Commits Validation
- Ensures all commit messages follow the standardized format: `type: message`
- Supported types: feat, fix, chore, docs, refactor, style, test
- Requires a minimum of 10 characters in the commit message

### 2. Build and Test
- Verifies the existence of essential files: package.json, LICENSE, README.md
- Implements caching for Node.js modules to speed up the process
- Installs dependencies
- Runs the test suite
- Builds the application
- Archives build artifacts for later use

### 3. Release Creation
- Creates a GitHub release with an automated version number
- Attaches build artifacts to the release
- Makes the release available for download

### 4. Production Deployment (with Approval)
- **Requires manual approval** before proceeding to deployment
- Implements a gated deployment approach for production environments
- Deploys the application to Railway platform
- Provides a URL for accessing the deployed application

### 5. Failure Notification
- Automatically detects any failures in the pipeline
- Sends an email notification to the commit author
- Includes details about the failure and links to the workflow run

## Manual Approval Process

This pipeline implements a manual approval gate before deploying to production, ensuring that:

1. Deployment only proceeds after an authorized team member reviews and approves
2. Production environments are protected from potentially problematic changes
3. The team maintains control over the release schedule

## Environment Details

- **Production URL**: http://actions-lab-dev.up.railway.app
- **Deployment Platform**: Railway

## Architecture
![Untitled Diagram drawio (1)](https://github.com/user-attachments/assets/590d18d6-5e41-4109-b8eb-5895cbf77e67)
