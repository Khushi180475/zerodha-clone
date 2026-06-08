# 📈 Zerodha Clone

A full-stack stock trading platform clone inspired by [Zerodha](https://zerodha.com), India's largest stock broker. Built as a learning and portfolio project using the MERN stack.

---

## 🌐 Live Demo
- 🏠 Landing Page: *coming soon*
- 📊 Dashboard: *coming soon*

---

## 📸 Screenshots

### Landing Page
![Landing Page](screenshots/landing.png)

### Signup Page
![Signup](screenshots/signup.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Holdings
![Holdings](screenshots/holdings.png)

### Orders
![Orders](screenshots/orders.png)

---

## ✨ Features

### Authentication
- ✅ User Signup with form validation
- ✅ User Login with JWT token
- ✅ Protected routes (redirect to login if not authenticated)
- ✅ Logout with token cleanup
- ✅ Per-user data isolation (each user sees only their own data)

### Dashboard
- ✅ Personalized greeting with username
- ✅ Equity summary (margin available, opening balance)
- ✅ Holdings P&L summary (real-time calculation)
- ✅ Watchlist with live stock prices

### Trading
- ✅ Buy stocks from watchlist
- ✅ Sell stocks from watchlist
- ✅ Order history with BUY/SELL badges and timestamps

### Portfolio
- ✅ Holdings table with Avg cost, LTP, Current value, P&L
- ✅ Positions table with product type, P&L
- ✅ Bar chart visualization of portfolio

### Analytics
- ✅ 30-day price history chart for each stock
- ✅ Open, High, Low, Close stats
- ✅ Green/Red coloring based on performance

---

## 🛠️ Tech Stack

### Frontend (Landing Page)
| Technology | Purpose |
|------------|---------|
| React.js | UI framework |
| Bootstrap 5 | Styling |
| React Router DOM | Navigation |
| Axios | API calls |

### Dashboard
| Technology | Purpose |
|------------|---------|
| React.js | UI framework |
| Bootstrap 5 | Styling |
| React Router DOM | Navigation |
| Axios | API calls |
| Chart.js | Data visualization |
| Material UI | Icons & tooltips |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express.js | Web framework |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password hashing |
| CORS | Cross-origin requests |
| dotenv | Environment variables |

---

## 📁 Project Structure

```
zerodha-clone/
│
├── frontend/                   # Landing page (Port 3000)
│   ├── public/
│   │   └── media/              # SVG images and assets
│   └── src/
│       └── landing_page/
│           ├── home/           # Home page components
│           ├── signup/         # Signup page components
│           ├── about/          # About page
│           ├── products/       # Products page
│           ├── pricing/        # Pricing page
│           └── support/        # Support page
│
├── dashboard/                  # Trading dashboard (Port 3002)
│   └── src/
│       └── components/
│           ├── Dashboard.js    # Main layout
│           ├── Menu.js         # Top navigation
│           ├── WatchList.js    # Stock watchlist
│           ├── Summary.js      # Dashboard home
│           ├── Holdings.js     # Portfolio holdings
│           ├── Positions.js    # Open positions
│           ├── Orders.js       # Order history
│           ├── Funds.js        # Fund management
│           ├── BuyActionWindow.js   # Buy order modal
│           ├── SellActionWindow.js  # Sell order modal
│           ├── AnalyticsWindow.js   # Stock chart
│           ├── GeneralContext.js    # Global state
│           ├── Login.js        # Login page
│           └── PrivateRoute.js # Route protection
│
└── backend/                    # REST API (Port 5000)
    ├── models/
    │   ├── UserModel.js        # User schema
    │   ├── HoldingsModel.js    # Holdings schema
    │   ├── PositionsModel.js   # Positions schema
    │   └── OrdersModel.js      # Orders schema
    ├── routes/
    │   ├── authRoutes.js       # Signup & Login
    │   └── dashboardRoutes.js  # Holdings, Positions, Orders
    ├── middleware/
    │   └── authMiddleware.js   # JWT verification
    ├── seeder.js               # Sample data seeder
    └── index.js                # Server entry point
```

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user + seed default data | ❌ |
| POST | `/api/auth/login` | Login and get JWT token | ❌ |

### Dashboard
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/holdings` | Get logged-in user's holdings | ✅ |
| GET | `/api/positions` | Get logged-in user's positions | ✅ |
| GET | `/api/orders` | Get logged-in user's orders | ✅ |
| POST | `/api/orders` | Place a new BUY or SELL order | ✅ |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- MongoDB Atlas account (free tier)
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Khushi180475/zerodha-clone.git
cd zerodha-clone
```

**2. Setup Backend**
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key_here
PORT=5000
```

Start the backend server:
```bash
node index.js
```

You should see:
```
✅ Connected to MongoDB
🚀 Server running on port 5000
```

**3. Seed sample data (optional)**
```bash
node seeder.js
```

**4. Setup Frontend (Landing Page)**
```bash
cd ../frontend
npm install
npm start
# Runs on http://localhost:3000
```

**5. Setup Dashboard**
```bash
cd ../dashboard
npm install
npm start
# Runs on http://localhost:3002
```

### Running the App
You need **3 terminals** running simultaneously:

| Terminal | Command | URL |
|----------|---------|-----|
| 1 | `cd backend && node index.js` | https://zerodha-clone-bozv.onrender.com |
| 2 | `cd frontend && npm start` | http://localhost:3000 |
| 3 | `cd dashboard && npm start` | http://localhost:3002 |

---

## 🔐 Environment Variables

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/zerodha
JWT_SECRET=your_super_secret_key
PORT=5000
```

> ⚠️ Never commit your `.env` file to GitHub!

---

## 🧠 Key Learnings

- Building a full-stack MERN application from scratch
- JWT-based authentication and route protection
- MongoDB data modeling with Mongoose
- React component architecture and state management
- REST API design and implementation
- Per-user data isolation using userId references
- Deploying full-stack applications

---

## 🔮 Future Improvements

- [ ] Real-time stock prices using WebSockets or external API
- [ ] OTP-based authentication (like real Zerodha)
- [ ] Portfolio analytics with historical data
- [ ] Paper trading with virtual money
- [ ] Mobile responsive dashboard
- [ ] Dark mode support
- [ ] Email notifications for orders

---

## 👩‍💻 Author

**Khushi Aggarwal**
- GitHub: [@Khushi180475](https://github.com/Khushi180475)

---

## 📝 License

This project is for educational purposes only. Not affiliated with Zerodha Broking Ltd.

---

⭐ If you found this project helpful, please give it a star!