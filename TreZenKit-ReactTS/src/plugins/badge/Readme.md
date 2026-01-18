# Badge

## Overview

Badge component hiển thị thông tin ngắn gọn, trạng thái hoặc số đếm dưới dạng nhãn nhỏ. Component hỗ trợ nhiều variant khác nhau để phù hợp với các use case từ hiển thị trạng thái, thông báo đến đếm số lượng.

**Khi nào nên sử dụng:**

- Hiển thị trạng thái (online, offline, active)
- Đánh dấu thông báo chưa đọc
- Hiển thị số lượng items, messages, notifications
- Gắn nhãn phân loại cho content
- Highlight thông tin quan trọng

## Installation

```bash
npm install trezinkit
```

## Import

```typescript
import { Badge } from "trezinkit";
```

## Basic Usage

```tsx
import { Badge } from "trezinkit";

function ProductCard() {
	return (
		<div className="relative">
			{/* Basic badge */}
			<Badge variant="basic">New</Badge>

			{/* Status badge */}
			<Badge variant="status">Online</Badge>

			{/* Count badge */}
			<Badge variant="count" total={5} placement="tr" />

			{/* Notification badge */}
			<Badge variant="notif" placement="tr" />
		</div>
	);
}
```

**Giải thích:**

- `variant`: Loại badge (basic, status, count, notif)
- `placement`: Vị trí đặt badge (tr, tl, br, bl)
- `total`: Số đếm hiển thị (cho variant count)

## Props

| Name        | Type                                             | Default     | Description                    |
| ----------- | ------------------------------------------------ | ----------- | ------------------------------ |
| `variant`   | `"basic" \| "notif" \| "count" \| "status"`      | `"basic"`   | Loại badge                     |
| `className` | `string`                                         | `undefined` | CSS class tùy chỉnh            |
| `children`  | `ReactNode`                                      | `undefined` | Nội dung badge (basic, status) |
| `placement` | `"tr" \| "tl" \| "br" \| "bl"`                   | `"tr"`      | Vị trí badge (notif, count)    |
| `total`     | `number`                                         | `undefined` | Số đếm (count variant)         |
| `size`      | `1 \| 2 \| 3 \| 4 \| 5`                          | `undefined` | Kích thước badge               |
| `rounded`   | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "full"` | `undefined` | Độ bo góc (basic)              |
| `classDot`  | `string`                                         | `undefined` | Class cho dot (status)         |

## Variants / Options

### Basic Badge

```tsx
// Text badge
<Badge variant="basic">New</Badge>
<Badge variant="basic">Sale</Badge>
<Badge variant="basic">Premium</Badge>

// Custom styling
<Badge
  variant="basic"
  className="bg-red-100 text-red-600"
>
  Hot
</Badge>
```

### Status Badge

```tsx
// Online status
<Badge variant="status" className="text-green-500 bg-green-100 *:bg-green-500">
  Online
</Badge>

// Offline status
<Badge variant="status" className="text-gray-500 bg-gray-100 *:bg-gray-500">
  Offline
</Badge>

// Custom dot color
<Badge
  variant="status"
  classDot="bg-blue-500"
  className="text-blue-500 bg-blue-100"
>
  Active
</Badge>
```

### Count Badge

```tsx
// Notification count
<div className="relative">
  <button>Messages</button>
  <Badge variant="count" total={12} placement="tr" />
</div>

// Different placements
<Badge variant="count" total={5} placement="tl" /> // Top left
<Badge variant="count" total={3} placement="br" /> // Bottom right
<Badge variant="count" total={99} placement="bl" /> // Bottom left
```

### Notification Badge

```tsx
// Simple notification dot
<div className="relative">
  <button>Notifications</button>
  <Badge variant="notif" placement="tr" />
</div>

// Different sizes
<Badge variant="notif" placement="tr" size={1} /> // Small
<Badge variant="notif" placement="tr" size={3} /> // Medium
<Badge variant="notif" placement="tr" size={5} /> // Large
```

## Customization

### Custom Colors

```tsx
// Success badge
<Badge
  variant="basic"
  className="bg-green-100 text-green-700"
>
  Success
</Badge>

// Warning badge
<Badge
  variant="basic"
  className="bg-yellow-100 text-yellow-700"
>
  Warning
</Badge>

// Error badge
<Badge
  variant="basic"
  className="bg-red-100 text-red-700"
>
  Error
</Badge>
```

### Combining with Icons

```tsx
// Badge with icon
<Badge variant="basic" className="flex items-center gap-1">
  <CheckIcon className="w-3 h-3" />
  Verified
</Badge>

// Status with custom icon
<Badge variant="status" className="text-blue-500 bg-blue-100">
  <StarIcon className="w-3 h-3 mr-1" />
  Premium
</Badge>
```

### Responsive Badges

```tsx
// Hide on mobile, show on desktop
<Badge
  variant="basic"
  className="hidden md:inline-flex"
>
  Desktop Only
</Badge>

// Different sizes on different screens
<Badge
  variant="count"
  total={notifications}
  className="text-xs md:text-sm"
  placement="tr"
/>
```

## Best Practices

### ✅ Nên làm

- Sử dụng màu sắc có ý nghĩa (đỏ cho error, xanh cho success)
- Giữ text ngắn gọn, dễ đọc
- Sử dụng placement phù hợp với layout
- Cung cấp contrast đủ cho accessibility

```tsx
// Good
<Badge variant="basic" className="bg-red-100 text-red-700">
  Error
</Badge>

<Badge variant="count" total={unreadCount} placement="tr" />
```

### ❌ Tránh làm

- Không sử dụng text quá dài
- Không đặt quá nhiều badge trong một khu vực
- Không sử dụng màu sắc không có ý nghĩa
- Không quên xử lý số đếm lớn

```tsx
// Bad
<Badge variant="basic">
  This is a very long badge text that should be avoided
</Badge>

<Badge variant="count" total={999999} /> // Nên format: 999+
```

## Accessibility

- **Color Contrast**: Đảm bảo contrast ratio đủ giữa text và background
- **Screen Readers**: Badge content được đọc bởi screen readers
- **Semantic Meaning**: Sử dụng màu sắc kết hợp với text/icon để truyền đạt ý nghĩa

```tsx
// Accessible badge with proper contrast
<Badge
  variant="basic"
  className="bg-blue-600 text-white" // High contrast
  aria-label="New notification"
>
  New
</Badge>

// Status badge with clear meaning
<Badge
  variant="status"
  className="text-green-700 bg-green-100 *:bg-green-500"
  aria-label="User is online"
>
  Online
</Badge>
```

## Notes

### Count Formatting

- Xem xét format số lớn (999+ thay vì 1000)
- Handle edge cases như số âm hoặc 0

```tsx
// Format large numbers
const formatCount = (count: number) => {
	if (count > 99) return "99+";
	return count.toString();
};

<Badge variant="count" total={formatCount(unreadCount)} />;
```

### Performance

- Badge component lightweight, không ảnh hưởng performance
- Sử dụng conditional rendering cho dynamic badges

```tsx
// Conditional rendering
{
	hasNotifications && <Badge variant="notif" placement="tr" />;
}

{
	messageCount > 0 && <Badge variant="count" total={messageCount} placement="tr" />;
}
```

### Edge Cases

- Handle undefined/null values gracefully
- Xử lý placement khi parent element có position relative
- Badge tự động adjust khi content thay đổi

```tsx
// Safe rendering
<Badge variant="count" total={count || 0} />

// Ensure parent has relative positioning
<div className="relative">
  <button>Button</button>
  <Badge variant="notif" placement="tr" />
</div>
```
