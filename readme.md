# TreZinKit

<div align="center">

![TreZinKit Logo](https://via.placeholder.com/200x80/1E40AF/FFFFFF?text=TreZinKit)

**A Modern, Lightweight UI Library for React Developers**

[![npm version](https://badge.fury.io/js/trezenkit.svg)](https://badge.fury.io/js/trezenkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)](https://tailwindcss.com/)

[Documentation](https://trezenkit-docs.netlify.app) • [Storybook](https://trezenkit-storybook.netlify.app) • [Examples](https://github.com/yourusername/trezenkit-examples)

</div>

## 🚀 Introduction

TreZinKit is a modern, modular UI library built specifically for React developers who value **simplicity**, **performance**, and **customization**. Designed with a utility-first approach using Tailwind CSS, TreZinKit provides production-ready components that are lightweight, accessible, and highly customizable.

### Why TreZinKit?

-   **🎯 Developer-First**: Built by developers, for developers
-   **⚡ Performance Optimized**: Minimal bundle size with tree-shaking support
-   **🎨 Highly Customizable**: Tailwind CSS-powered with extensive theming options
-   **♿ Accessibility Ready**: WCAG compliant with built-in ARIA support
-   **📱 Responsive by Default**: Mobile-first design principles
-   **🔧 TypeScript Native**: Full type safety and IntelliSense support

### Target Audience

-   **React Developers** building modern web applications
-   **UI/UX Teams** seeking consistent, reusable components
-   **Startups & Agencies** needing rapid prototyping capabilities
-   **Enterprise Teams** requiring scalable, maintainable UI systems

## ✨ Key Features

### Core Components

-   **Avatar**: Profile pictures with multiple variants (basic, count, initials)
-   **Badge**: Notification badges with status indicators
-   **Breadcrumb**: Navigation breadcrumbs with customizable separators
-   **Button**: Interactive buttons with multiple variants and states
-   **Divider**: Section separators with flexible styling
-   **Tag**: Labeling and categorization components
-   **Tooltip**: Contextual information overlays

### Design Philosophy

-   **Modular Architecture**: Import only what you need
-   **Utility-First**: Leverage Tailwind CSS for maximum flexibility
-   **Variant-Driven**: Consistent API across all components
-   **Composition-Friendly**: Easy to extend and customize
-   **Performance-Conscious**: Optimized for production environments

## 🛠 Technology Stack

-   **React 19+**: Latest React features and optimizations
-   **TypeScript**: Full type safety and developer experience
-   **Tailwind CSS 4+**: Utility-first CSS framework
-   **Vite**: Lightning-fast build tool and development server
-   **Storybook**: Component development and documentation
-   **ESLint + Prettier**: Code quality and formatting

## 📦 Installation

### Quick Start

```bash
# Using npm
npm install trezenkit

# Using yarn
yarn add trezenkit

# Using pnpm
pnpm add trezenkit
```

### Peer Dependencies

Ensure you have the required peer dependencies:

```bash
npm install react@^19 react-dom@^19 tailwindcss@^4 clsx tailwind-merge
```

### Tailwind CSS Configuration

Add TreZinKit to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/trezenkit/dist/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#eff6ff",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
				},
				// Add your custom colors
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
```

### CSS Import

Import the base styles in your main CSS file:

```css
/* src/index.css */
@import "trezenkit/dist/styles.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🎯 Usage

### Basic Example

```tsx
import React from "react";
import { Avatar, Badge, Button, Breadcrumb } from "trezenkit";

function App() {
	const breadcrumbItems = [{ title: "Home", href: "/" }, { title: "Products", href: "/products" }, { title: "Details" }];

	return (
		<div className="p-8 space-y-6">
			{/* Navigation */}
			<Breadcrumb items={breadcrumbItems} separator="chevron" />

			{/* User Profile Section */}
			<div className="flex items-center gap-4">
				<div className="relative">
					<Avatar src="https://i.pravatar.cc/150?img=1" size="lg" rounded="full" />
					<Badge variant="status" color="online" placement="br" size={3} />
				</div>

				<div>
					<h2 className="text-xl font-semibold">John Doe</h2>
					<Badge variant="basic" color="primary" className="mt-1">
						Premium User
					</Badge>
				</div>
			</div>

			{/* Actions */}
			<div className="flex gap-3">
				<Button variant="primary" size="md">
					Edit Profile
				</Button>
				<Button variant="outline" size="md">
					Settings
				</Button>
			</div>
		</div>
	);
}

export default App;
```

### Advanced Customization

```tsx
import { Avatar, Badge } from "trezenkit";
import { cn } from "trezenkit/utils";

// Custom Avatar with notification count
function UserAvatar({ user, notificationCount }) {
	return (
		<div className="relative">
			<Avatar src={user.avatar} alt={user.name} size="xl" rounded="lg" className={cn("ring-2 ring-offset-2", user.isOnline ? "ring-green-500" : "ring-gray-300")} />
			{notificationCount > 0 && <Badge variant="count" total={notificationCount} placement="tr" color="danger" size={4} />}
		</div>
	);
}
```

## 📁 Project Structure

```
TreZinKit-ReactTS/
├── src/
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn, clsx helpers)
│   ├── plugins/                  # Component modules
│   │   ├── avatar/
│   │   │   ├── index.ts          # Main export
│   │   │   ├── interfaces.ts     # TypeScript definitions
│   │   │   ├── style.css         # Component styles
│   │   │   ├── variants/         # Component variants
│   │   │   └── shared/           # Shared utilities
│   │   ├── badge/
│   │   ├── breadcrumb/
│   │   ├── button/
│   │   ├── divider/
│   │   ├── tag/
│   │   └── tooltip/
│   └── types/                    # Global type definitions
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

### Key Directories

-   **`src/plugins/`**: Modular component architecture - each component is self-contained
-   **`src/lib/`**: Shared utilities and helper functions
-   **`variants/`**: Component variant implementations for different use cases
-   **`shared/`**: Reusable logic and utilities specific to each component

## 🔧 Development & Contributing

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/trezenkit.git
cd trezenkit

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run Storybook
pnpm storybook

# Build for production
pnpm build

# Run linting
pnpm lint
```

### Development Workflow

1. **Component Development**: Each component follows the plugin architecture
2. **Type Safety**: All components are fully typed with TypeScript
3. **Testing**: Components are tested in Storybook with various scenarios
4. **Documentation**: Each component includes comprehensive documentation

### Contributing Guidelines

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-component`
3. **Commit** your changes: `git commit -m 'Add amazing component'`
4. **Push** to the branch: `git push origin feature/amazing-component`
5. **Open** a Pull Request

Please ensure your code follows our coding standards and includes appropriate tests.

## 🗺 Roadmap

### Version 1.0 (Current)

-   ✅ Core component library (Avatar, Badge, Breadcrumb, Button, Divider, Tag, Tooltip)
-   ✅ TypeScript support
-   ✅ Tailwind CSS integration
-   ✅ Storybook documentation

### Version 1.1 (Q2 2026)

-   🔄 Form components (Input, Select, Checkbox, Radio)
-   🔄 Layout components (Grid, Container, Stack)
-   🔄 Navigation components (Navbar, Sidebar, Tabs)

### Version 1.2 (Q3 2026)

-   📋 Data display components (Table, Card, List)
-   📋 Feedback components (Alert, Toast, Modal)
-   📋 Advanced components (DatePicker, Autocomplete)

### Version 2.0 (Q4 2026)

-   🚀 Theme system overhaul
-   🚀 Animation system
-   🚀 Advanced accessibility features
-   🚀 Performance optimizations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👥 Authors & Contributors

**Core Team**

-   **Your Name** - _Creator & Lead Developer_ - [@yourhandle](https://github.com/yourusername)

**Contributors**

-   See our [Contributors](https://github.com/yourusername/trezenkit/contributors) page

## 📞 Support & Community

-   **📖 Documentation**: [trezenkit-docs.netlify.app](https://trezenkit-docs.netlify.app)
-   **🐛 Bug Reports**: [GitHub Issues](https://github.com/yourusername/trezenkit/issues)
-   **💬 Discussions**: [GitHub Discussions](https://github.com/yourusername/trezenkit/discussions)
-   **🐦 Twitter**: [@trezenkit](https://twitter.com/trezenkit)
-   **📧 Email**: support@trezenkit.dev

---

<div align="center">

**Built with ❤️ by developers, for developers**

[⭐ Star us on GitHub](https://github.com/yourusername/trezenkit) • [📦 View on npm](https://www.npmjs.com/package/trezenkit)

_Last updated: January 18, 2026_

</div>
