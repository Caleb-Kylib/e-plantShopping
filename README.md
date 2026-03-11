# Paradise Nursery 🌿

Welcome to **Paradise Nursery**, a modern, responsive, and feature-rich online shop for houseplants. This application is built with React and powered by Redux Toolkit for seamless state management.

## 🚀 Live Features

- **Dynamic Landing Page**: A visually stunning entrance with glassmorphism effects and a call-to-action to begin your plant journey.
- **Categorized Product Listing**: Browse houseplants grouped by their benefits:
    - Air Purifying Plants
    - Aromatic Fragrant Plants
    - Decorative Indoor Plants
- **Smart Shopping Cart**:
    - Add/Remove items with real-time Navbar counter updates.
    - Adjust quantities directly in the cart.
    - Automatic subtotal and total cost calculation.
- **Premium UI/UX**: Built with Tailwind CSS for a clean, forest-green aesthetic that is fully responsive across mobile, tablet, and desktop devices.
- **SEO Ready**: Semantic HTML structure with optimized meta tags.

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) (Vite)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
src/
├── assets/         # Local plant images and media
├── components/     # Reusable UI components (Navbar, PlantCard, CartItem)
├── data/           # Local product data (plants.js)
├── pages/          # Main application views (Landing, Products, Cart)
├── redux/          # Store configuration and Cart slice
├── App.jsx         # Router configuration
└── main.jsx        # Entry point & Provider injection
```

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To launch the development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to see the app.

### Building for Production

To create an optimized production build:
```bash
npm run build
```

---

*Made with ❤️ for plant lovers everywhere.*
