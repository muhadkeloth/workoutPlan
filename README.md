# Lean Shred Complete Plan

A modern, responsive workout and diet tracking application built with React, TypeScript, and Tailwind CSS.

## Features

- **Workout Tracking**: Complete 7-day workout split with detailed exercises
- **Diet Planning**: Meal plans with nutritional information and food guidelines
- **Face Yoga**: Morning and evening routines for facial fitness
- **Daily Reminders**: Time-based reminders for all activities
- **Progress Tracking**: Interactive daily habit tracker with progress visualization
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean, intuitive interface with smooth animations

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vite** - Fast development tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd workout-plan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── StatsCard.tsx
│   ├── WorkoutSection.tsx
│   ├── DietSection.tsx
│   ├── FaceYogaSection.tsx
│   └── RemindersSection.tsx
├── data/              # Static data
│   ├── workoutData.ts
│   ├── dietData.ts
│   ├── faceYogaData.ts
│   ├── remindersData.ts
│   └── statsData.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css           # Global styles
```

## Usage

### Workout Section
- View your weekly workout schedule
- Click on any day to see detailed exercises
- Color-coded days indicate workout type (burn, muscle, rest)

### Diet Section
- Browse your daily meal plan with calorie counts
- See recommended and restricted foods
- Track macronutrient goals

### Face Yoga Section
- Follow morning and evening routines
- Learn facial exercises for a defined look
- Get bonus tips for facial slimming

### Reminders & Tracker
- Set up daily reminders for all activities
- Track your daily habits with interactive checkboxes
- Monitor your progress with visual indicators

## Customization

### Adding New Exercises
Edit `src/data/workoutData.ts` to add or modify workout routines.

### Updating Meal Plans
Modify `src/data/dietData.ts` to customize meal plans and nutritional information.

### Personalizing Reminders
Update `src/data/remindersData.ts` to adjust reminder times and activities.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with modern web technologies for optimal performance
- Designed with user experience and accessibility in mind
- Responsive design ensures compatibility across all devices
