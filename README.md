# 🛒 B2B E-Commerce Platform

A modern **B2B e-commerce platform** connecting retailers with wholesalers through a digital marketplace. This solution streamlines bulk ordering, reduces distribution costs, and provides efficient transaction management for business-to-business commerce.

---

## ✨ Key Features

- 👥 **Role-based User System**: Separate interfaces for retailers and wholesalers
- 📦 **Product Catalog**: Comprehensive inventory management with real-time tracking
- 🚚 **Order Processing**: Complete workflow from cart to delivery tracking

---

## 🛠️ Technology Stack

### 🎨 Frontend

- <img src="https://img.icons8.com/color/48/000000/react-native.png" width="16"/> React.js (v18+) with component-based architecture
- 🧠 Zustand for state management
- 🎨 Tailwind CSS for responsive design
- 🔄 Tanstack Query for server-state management

### ⚙️ Backend

- 🔥 Firebase (Authentication, Firestore, Storage, Cloud Functions)
- 🔌 RESTful API with Firebase Auth JWT tokens
- 📊 Firestore NoSQL database with real-time synchronization
- ☁️ Firebase Cloud Functions for serverless backend logic
- 📁 Firebase Storage for file and image management

### 🌐 Infrastructure

- 🐳 Docker containerization for frontend
- 🔄 CI/CD pipeline for automated deployments
- ⚖️ Firebase hosting for scalable web deployment

---

## 🚀 Getting Started

### 📋 Prerequisites

- <img src="https://img.icons8.com/color/48/000000/nodejs.png" width="16"/> Node.js v18+
- 🔥 Firebase CLI
- 🔧 Firebase project setup with enabled services

### 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gulawebapp/gula_webapp
   cd b2b-ecommerce-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Firebase Configuration**

   ```bash
   # Install Firebase CLI globally
   npm install -g firebase-tools

   # Login to Firebase
   firebase login

   # Initialize Firebase project
   firebase init
   ```

4. **Environment Setup**
   Create a `.env.local` file:

   ```env
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_project.appspot.com
   VITE_MESSAGING_SENDER_ID=your_sender_id
   VITE_APP_ID=your_app_id
   ```

5. **Firebase Services Setup**

   - Enable Authentication (Email/Password, Google, etc.)
   - Create Firestore database
   - Set up Storage bucket
   - Deploy Cloud Functions
   - Configure security rules

6. **Start Development Server**
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # react.js pages
│   ├── lib/                # Utility functions
│   │   ├── firebase.js     # Firebase configuration
│   │   └── store.js        # Zustand store
│   └── styles/             # CSS and Tailwind styles
├── functions/              # Firebase Cloud Functions
│   ├── src/
│   │   ├── auth/          # Authentication functions
│   │   ├── orders/        # Order management
│   │   ├── products/      # Product operations
│   │   └── notifications/ # Email/SMS notifications
├── firestore.rules        # Firestore security rules
├── storage.rules          # Storage security rules
└── firebase.json          # Firebase configuration
```

---

## 🔥 Firebase Services Used

### 🔐 Authentication

- Email/password authentication
- Google OAuth integration
- Role-based access control
- JWT token management

### 📊 Firestore Database

Collections structure:

```
├── users/                 # User profiles (retailers/wholesalers)
├── products/             # Product catalog
├── orders/               # Order transactions
├── categories/           # Product categories
```

### ☁️ Cloud Functions

- Order processing workflows
- Automated inventory updates

## 🚀 Deployment

### Development

```bash
npm run dev
firebase emulators:start
```

### Production

```bash
# Build the application
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting

# Deploy Cloud Functions
firebase deploy --only functions
```

---

## 📊 State Management

### Zustand Stores

- **authStore**: User authentication state
- **cartStore**: Shopping cart management
- **productStore**: Product catalog state
- **orderStore**: Order tracking and history
- **notificationStore**: Alert and notification management

## 🔧 Development Scripts

```bash
# Development
npm start                  # Start development server
npm run build              # Build for production
npm run test               # Run tests
npm run eject              # Eject from Create React App

# Firebase
firebase emulators:start   # Start Firebase emulators
firebase deploy            # Deploy to production
firebase functions:log     # View function logs
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

For support and questions:

- 📧 Create an issue in the repository
- 📚 Check Firebase documentation: https://firebase.google.com/docs
- 🌐 React documentation: https://react.dev/

---

## 🔮 Future Enhancements

- Mobile app development (React Native)
- AI-powered product recommendations
- Advanced analytics dashboard
- Multi-language support
- Blockchain integration for supply chain transparency
- Advanced inventory forecasting
- Bulk import/export functionality

---

Built with ❤️ using React.js and Firebase
