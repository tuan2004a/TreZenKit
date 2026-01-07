TreZenKit là thư viện UI cho React (v19+) dùng hoàn toàn Tailwind CSS. Mục tiêu: đơn giản, nhẹ, dễ tùy biến, hiệu suất tốt, sẵn sàng sản xuất. Components responsive, hỗ trợ dark/light mode, accessibility và TypeScript.

Nội dung

-   Tính năng
-   Cài đặt nhanh
-   Cấu hình Tailwind
-   Sử dụng
-   Components
-   Tùy chỉnh
-   Storybook
-   Phát triển & kiểm thử
-   Đóng góp
-   Giấy phép & liên hệ

Tính năng

-   Nhẹ, thuần utility: chỉ React + Tailwind classes, không phụ thuộc headless phức tạp.
-   Responsive & theming: hỗ trợ breakpoints, dark mode theo cấu hình Tailwind.
-   Variants theo props: size, color, state; chấp nhận className để override.
-   Accessibility: tuân thủ WCAG, ARIA, keyboard navigation.
-   TypeScript: an toàn kiểu, autocomplete tốt.
-   Peer deps tối giản: React và Tailwind.

Cài đặt nhanh

1. Cài thư viện

```bash
npm install trezenkit
# hoặc
pnpm add trezenkit
```

2. Cài peer dependencies (nếu thiếu)

```bash
npm install react@^19 tailwindcss@^3 clsx
# hoặc
pnpm add react@^19 tailwindcss@^3 clsx
```

3. Cấu hình Tailwind (tailwind.config.js)

```js
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/trezenkit/dist/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1E40AF",
				secondary: "#DC2626",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
```

4. Import CSS (nếu thư viện export base CSS)

-   Thêm vào index.css: `@import 'trezenkit/dist/styles.css';`

5. Build dự án để purge classes

-   Chạy: `npm run build` hoặc `pnpm run build`

Sử dụng

-   Import components và dùng ngay; có thể thêm className để tùy biến.

Ví dụ cơ bản

```tsx
import React from "react";
import { Button, Card } from "trezenkit";

function App() {
	return (
		<div className="p-8 bg-gray-100 min-h-screen">
			<Card className="max-w-md mx-auto">
				<h1 className="text-2xl font-bold mb-4">Chào mừng đến với TreZenKit!</h1>
				<Button variant="primary" size="lg">
					Click Me
				</Button>
			</Card>
		</div>
	);
}

export default App;
```

Components

Button

-   Props: `variant: 'primary' | 'secondary' | 'outline'` (mặc định: `primary`), `size: 'sm' | 'md' | 'lg'` (mặc định: `md`), `className`, các props HTML của button.

Ví dụ

```tsx
<Button variant="primary" size="lg" onClick={() => alert('Clicked!')}>Primary Large</Button>
<Button variant="outline" size="sm" disabled>Outline Small (Disabled)</Button>
```

Card

-   Container có shadow và padding; nhận `className`, `children`.

Ví dụ

```tsx
<Card className="p-6 shadow-lg">
	<h2 className="text-xl mb-2">Nội dung Card</h2>
	<p>Đây là mô tả.</p>
</Card>
```

Input

-   Input control với focus states; props: `type`, `placeholder`, `className`, các props HTML input.

Ví dụ

```tsx
<Input type="email" placeholder="Nhập email" className="w-full" />
```

Modal

-   Overlay dialog; props: `isOpen`, `onClose`, `title`, `children`.

Ví dụ

```tsx
const [open, setOpen] = useState(false);

<Modal isOpen={open} onClose={() => setOpen(false)} title="Modal Title">
	Nội dung modal.
</Modal>;
```

-   Toàn bộ API chi tiết xem trong Storybook hoặc source.

Tùy chỉnh

-   Theme: override colors/spacing trong `tailwind.config.js`.
-   Classes: sử dụng `className` để kết hợp utility classes.
-   Dark mode: hỗ trợ `dark:` nếu `darkMode: 'class'`.
-   Animations: thêm transitions qua classes như `transition-all`.

Storybook

-   Demo và test components local:

```bash
npm install -g @storybook/cli
npx storybook
# hoặc
pnpm dlx @storybook/cli init
```

-   Truy cập: http://localhost:6006
-   Deploy demo: https://trezenkit-storybook.netlify.app

Phát triển & kiểm thử

-   Code style: dùng Prettier/ESLint.
-   Kiểm thử: thêm tests với Vitest, cập nhật docs và stories.

Đóng góp

-   Quy trình: Fork repo → tạo branch `feature/...` → commit → push → mở Pull Request.
-   Vui lòng xem thêm trong `CONTRIBUTING.md`.

Giấy phép & liên hệ

-   MIT License → xem `LICENSE`.
-   Tác giả: Your Name
-   Repo: github.com/yourusername/trezenkit
-   Issues: github.com/yourusername/trezenkit/issues
-   Twitter: @yourhandle

Cảm ơn bạn đã sử dụng TreZenKit! Nếu có góp ý, hãy mở issue. 🚀

Last updated: January 07, 2026
Built with React, Tailwind CSS, Vite.
