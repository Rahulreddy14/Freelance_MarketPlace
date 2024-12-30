# FreeLinkr

## Description
FreeLinkr is a modern freelance marketplace built with the MERN stack, designed to seamlessly connect talented professionals with clients worldwide. The platform offers a streamlined approach to freelancing, making it easy to post, find, and manage professional services.

## Features

### 🔐 User Authentication & Profiles
- Secure MongoDB-based authentication system
- Dual user roles: Service providers and clients
- Customizable user profiles
- Personal dashboards with analytics

### 💼 Service Management
- Intuitive service creation and editing
- Category-based organization
- Advanced search with filters
- Featured services section
- Smart loading states with shimmer effects
- Infinite scroll for service discovery

### 💰 Business Tools
- Secure Stripe payment integration
- Comprehensive order tracking
- Service reviews and ratings
- Real-time messaging system
- Order history and management

### 📱 Technical Highlights
- Fully responsive design
- Real-time notifications
- Live chat functionality
- Performance optimized loading
- Interactive UI elements

## Technology Stack

### Frontend
- React.js
- React Router
- Redux for state management
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Additional Tools
- Stripe API for payments
- Socket.io for real-time features
- Cloudinary for media storage

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB
- npm or yarn
- Stripe account for payments

### Installation
1. Clone the repository
```bash
git clone [repository-link]
```

2. Install dependencies
```bash
cd freelinkr
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Start the development server
```bash
npm run dev
```

## Environment Variables
```
MONGODB_URI=
JWT_SECRET=
STRIPE_SECRET_KEY=
CLOUDINARY_URL=
```

## Project Structure
```
freelinkr/
├── client/          # React frontend
├── server/          # Node.js backend
├── config/          # Configuration files
└── public/          # Static files
```

## Contributing
We welcome contributions! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.