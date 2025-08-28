# EBOMI - Evangelical Biblical Outreach Ministries International

A modern, mobile-first web application for Prophet Isa El-Buba's ministry, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### 📱 Mobile-First Design
- Responsive design optimized for mobile devices
- Touch-friendly interface with mobile app-like navigation
- Smooth animations and transitions

### 🎥 Live Streaming
- Spectacular live page with red animations
- Real-time viewer count simulation
- Live status indicators with pulsing effects
- Upcoming events scheduling

### 📖 Content Management
- Sermon library with search functionality
- Daily devotionals integrated into sermons section
- Audio player with progress tracking
- Book purchase section with detailed descriptions

### 🙏 Community Features
- Interactive Prayer Wall for community support
- Testimonies section for sharing experiences
- "I'm praying" and "Blessed" buttons for engagement
- Anonymous prayer request options

### 🎨 Visual Design
- EBOMI branding with custom color scheme
- Loading screen with animated video logo
- Beautiful gradients and glass-morphism effects
- Professional typography and spacing

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **State Management**: React Context API
- **Icons**: Lucide React
- **Animations**: CSS Transitions + Tailwind Animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sheddybata/Ebomi.git
cd Ebomi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8082`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # App header with notifications
│   ├── BottomNavigation.tsx # Mobile navigation
│   ├── HomeSection.tsx # Main home page
│   ├── LiveSection.tsx # Live streaming page
│   ├── SermonsSection.tsx # Sermons and devotionals
│   └── GetInvolvedSection.tsx # Ministry involvement
├── contexts/           # React contexts
├── pages/             # Page components
├── styles/            # CSS styles
└── main.tsx           # App entry point
```

## 🎨 Customization

### Colors
The app uses a custom color scheme defined in `tailwind.config.ts`:
- Primary Brown: `#682d0c`
- Primary Red: `#ff3131`

### Adding Content
- Sermons can be added to the `sermons` array in `SermonsSection.tsx`
- Events can be added to the `upcomingEvents` array in `LiveSection.tsx`
- Books can be added to the `books` array in `HomeSection.tsx`

## 📱 Mobile Optimization

The app is specifically designed for mobile devices with:
- Fixed bottom navigation
- Touch-optimized buttons and interactions
- Responsive layouts for all screen sizes
- Mobile-first CSS approach

## 🙏 Ministry Integration

This app is specifically designed for:
- **EBOMI Ministry** - Evangelical Biblical Outreach Ministries International
- **Prophet Isa El-Buba** - Ministry leader
- Community prayer and support
- Live streaming of services
- Content distribution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for EBOMI ministry use.

## 🙏 Support

For support or questions about the ministry, please contact the EBOMI team.

---

**Built with ❤️ for EBOMI Ministry**
