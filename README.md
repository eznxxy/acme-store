# ACME Store - Playwright Test Automation

A comprehensive end-to-end testing framework for the ACME Store demo application using Playwright with TypeScript.

## 🏗️ Project Structure

```
acme-store/
├── components/           # Reusable UI components
│   ├── base.component.ts
│   ├── navbar.component.ts
│   ├── footer.component.ts
│   └── product.component.ts
├── pages/               # Page Object Model
│   ├── base.page.ts
│   ├── home.page.ts
│   ├── search.page.ts
│   └── page.fixture.ts
├── tests/               # Test specifications
│   └── e2e/
│       └── product.spec.ts
├── playwright.config.ts # Playwright configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Running Tests
```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/e2e/product.spec.ts

# Run tests with UI mode
npx playwright test --ui
```

## 🏛️ Architecture

### Page Object Model (POM)
The project follows the Page Object Model pattern with a clear separation of concerns:

- **BasePage**: Common functionality shared across all pages
- **HomePage**: Home page specific actions and elements
- **SearchPage**: Search functionality and product listings

### Component-Based Architecture
Reusable UI components for consistent element interaction:

- **BaseComponent**: Base class for all UI components
- **NavbarComponent**: Navigation bar interactions
- **FooterComponent**: Footer links and elements
- **ProductComponent**: Product card interactions

### Key Features

#### BasePage
- Shared `navbar` and `footer` components
- Common navigation methods
- Page instance management

#### HomePage
- Product container access
- Home page navigation

#### SearchPage
- Product search functionality
- Collection filtering
- Product listing interactions

#### Components
- **NavbarComponent**: Search, navigation links, cart button
- **FooterComponent**: Footer links and policies
- **ProductComponent**: Product grid interactions

## ⚙️ Configuration

### Playwright Config
- **Base URL**: `https://demo.vercel.store/`
- **Browsers**: Chromium, Firefox, WebKit
- **Test Directory**: `./tests`
- **Reporter**: HTML

## 📊 Test Reports
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## 📝 License
ISC

## 🤝 Contributing
1. Follow the existing code structure
2. Add appropriate tests for new features
3. Update documentation as needed
