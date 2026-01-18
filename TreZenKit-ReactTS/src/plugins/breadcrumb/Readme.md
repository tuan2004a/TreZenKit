# Breadcrumb

## Overview

Breadcrumb component hiển thị đường dẫn điều hướng giúp người dùng hiểu vị trí hiện tại trong cấu trúc trang web và dễ dàng quay lại các trang trước đó. Component hỗ trợ nhiều kiểu separator và tự động xử lý styling cho item cuối cùng.

**Khi nào nên sử dụng:**

- Navigation trong website có cấu trúc phân cấp sâu
- E-commerce sites (Home > Category > Product)
- Documentation sites và knowledge bases
- Admin dashboards với nhiều levels
- Bất kỳ nơi nào cần hiển thị navigation path

## Installation

```bash
npm install trezinkit
```

## Import

```typescript
import { Breadcrumb } from "trezinkit";
```

## Basic Usage

```tsx
import { Breadcrumb } from "trezinkit";

function ProductPage() {
	const breadcrumbItems = [
		{ title: "Home", href: "/" },
		{ title: "Electronics", href: "/electronics" },
		{ title: "Smartphones", href: "/electronics/smartphones" },
		{ title: "iPhone 15 Pro" }, // Current page - no href
	];

	return (
		<div>
			<Breadcrumb items={breadcrumbItems} />
			<h1>iPhone 15 Pro</h1>
		</div>
	);
}
```

**Giải thích:**

- `items`: Array các breadcrumb items với title và href (optional)
- Item cuối cùng thường không có `href` vì là trang hiện tại
- Component tự động style item cuối cùng khác biệt

## Props

| Name        | Type                                         | Default     | Description                    |
| ----------- | -------------------------------------------- | ----------- | ------------------------------ |
| `items`     | `Array<{title: ReactNode, href?: string}>`   | `[]`        | Danh sách các breadcrumb items |
| `separator` | `"chevron" \| "slash" \| "bullet" \| "wave"` | `"chevron"` | Kiểu separator giữa các items  |
| `className` | `string`                                     | `""`        | CSS class tùy chỉnh            |

## Variants / Options

### Separator Types

```tsx
// Chevron separator (default)
<Breadcrumb
  items={items}
  separator="chevron"
/>

// Slash separator
<Breadcrumb
  items={items}
  separator="slash"
/>

// Bullet separator
<Breadcrumb
  items={items}
  separator="bullet"
/>

// Wave separator
<Breadcrumb
  items={items}
  separator="wave"
/>
```

### Different Content Types

```tsx
// Text only
const textItems = [{ title: "Dashboard", href: "/dashboard" }, { title: "Users", href: "/users" }, { title: "Profile" }];

// With icons
const iconItems = [
	{
		title: (
			<span className="flex items-center gap-1">
				<HomeIcon className="w-4 h-4" />
				Home
			</span>
		),
		href: "/",
	},
	{ title: "Products", href: "/products" },
	{ title: "MacBook Pro" },
];

// Mixed content
const mixedItems = [
	{ title: "Home", href: "/" },
	{ title: "Category", href: "/category" },
	{
		title: (
			<span className="flex items-center gap-1">
				Product Name
				<Badge variant="basic" className="ml-1">
					New
				</Badge>
			</span>
		),
	},
];
```

### Dynamic Breadcrumbs

```tsx
// From URL path
function useBreadcrumbFromPath() {
	const pathname = usePathname();

	const items = pathname
		.split("/")
		.filter(Boolean)
		.map((segment, index, array) => ({
			title: segment.charAt(0).toUpperCase() + segment.slice(1),
			href: index === array.length - 1 ? undefined : `/${array.slice(0, index + 1).join("/")}`,
		}));

	return [{ title: "Home", href: "/" }, ...items];
}

// Usage
const breadcrumbItems = useBreadcrumbFromPath();
<Breadcrumb items={breadcrumbItems} />;
```

## Customization

### Custom Styling

```tsx
// Custom colors
<Breadcrumb
  items={items}
  className="text-blue-600 *:hover:text-blue-800"
/>

// Larger text
<Breadcrumb
  items={items}
  className="text-base"
/>

// Custom spacing
<Breadcrumb
  items={items}
  className="space-x-4"
/>
```

### Responsive Breadcrumbs

```tsx
// Hide on mobile, show on desktop
<Breadcrumb
  items={items}
  className="hidden md:flex"
/>

// Truncate on mobile
<Breadcrumb
  items={items}
  className="text-sm md:text-base truncate md:truncate-none"
/>
```

### Custom Separators

```tsx
// Using different separators for different contexts
<Breadcrumb
  items={adminItems}
  separator="chevron" // Professional look
/>

<Breadcrumb
  items={blogItems}
  separator="bullet" // Casual look
/>
```

## Best Practices

### ✅ Nên làm

- Luôn bắt đầu với "Home" hoặc root page
- Item cuối cùng không nên có link (current page)
- Sử dụng meaningful titles, không dùng technical IDs
- Giữ breadcrumb ngắn gọn (tối đa 5-7 levels)

```tsx
// Good
const items = [
	{ title: "Home", href: "/" },
	{ title: "Electronics", href: "/electronics" },
	{ title: "Smartphones", href: "/electronics/smartphones" },
	{ title: "iPhone 15 Pro" }, // Current page
];

<Breadcrumb items={items} separator="chevron" />;
```

### ❌ Tránh làm

- Không tạo breadcrumb quá dài
- Không sử dụng technical terms khó hiểu
- Không làm current page clickable
- Không bỏ qua intermediate levels quan trọng

```tsx
// Bad
const badItems = [
	{ title: "Home", href: "/" },
	{ title: "prod_cat_123", href: "/prod_cat_123" }, // Technical ID
	{ title: "Current Page", href: "/current" }, // Current page shouldn't have href
];
```

## Accessibility

- **ARIA Support**: Component tự động thêm `aria-label="breadcrumb"` cho navigation
- **Semantic HTML**: Sử dụng `<nav>` element cho proper semantics
- **Screen Readers**: Links và text được đọc chính xác
- **Keyboard Navigation**: Hỗ trợ tab navigation cho các links

```tsx
// Accessible breadcrumb
<Breadcrumb
  items={[
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products' },
    { title: 'Current Product' }
  ]}
  // aria-label="breadcrumb" được thêm tự động
/>

// Enhanced accessibility
<Breadcrumb
  items={items.map((item, index) => ({
    ...item,
    title: index === items.length - 1
      ? <span aria-current="page">{item.title}</span>
      : item.title
  }))}
/>
```

## Notes

### Empty State Handling

- Component return `null` khi `items` array rỗng
- Không render gì khi không có items

```tsx
// Safe usage
<Breadcrumb items={items || []} />;

// Conditional rendering
{
	items.length > 0 && <Breadcrumb items={items} />;
}
```

### Performance Considerations

- Component lightweight, không ảnh hưởng performance
- Separator icons được optimize với SVG
- Sử dụng React.memo nếu items thay đổi thường xuyên

```tsx
// Memoized breadcrumb for frequent updates
const MemoizedBreadcrumb = React.memo(Breadcrumb);

<MemoizedBreadcrumb items={items} separator="chevron" />;
```

### Integration with Routing

```tsx
// Next.js integration
import { useRouter } from "next/router";
import Link from "next/link";

const items = breadcrumbData.map((item) => ({
	title: item.href ? <Link href={item.href}>{item.title}</Link> : item.title,
	href: undefined, // Let Link handle navigation
}));

// React Router integration
import { Link } from "react-router-dom";

const items = breadcrumbData.map((item) => ({
	title: item.href ? <Link to={item.href}>{item.title}</Link> : item.title,
	href: undefined,
}));
```

### Edge Cases

- Handle very long titles with truncation
- Manage breadcrumbs with special characters
- Support RTL languages

```tsx
// Long title handling
const items = [
	{ title: "Home", href: "/" },
	{
		title: (
			<span className="truncate max-w-32" title="Very Long Category Name">
				Very Long Category Name
			</span>
		),
		href: "/category",
	},
	{ title: "Product" },
];
```
