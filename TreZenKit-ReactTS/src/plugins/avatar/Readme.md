# Avatar

## Overview

Avatar component hiển thị hình đại diện của người dùng với khả năng tùy chỉnh kích thước, độ bo góc và xử lý lỗi tự động. Component được thiết kế để hiển thị ảnh profile, avatar trong danh sách người dùng, hoặc bất kỳ đâu cần đại diện trực quan cho một cá nhân.

**Khi nào nên sử dụng:**

- Hiển thị ảnh đại diện người dùng trong header, sidebar
- Danh sách thành viên, bình luận, tin nhắn
- Profile cards và user information displays
- Bất kỳ nơi nào cần nhận diện trực quan người dùng

## Installation

```bash
npm install trezinkit
```

## Import

```typescript
import { Avatar } from "trezinkit";
```

## Basic Usage

```tsx
import { Avatar } from "trezinkit";

function UserProfile() {
	return (
		<div>
			<Avatar src="https://example.com/user-avatar.jpg" alt="John Doe" size="md" />
		</div>
	);
}
```

**Giải thích:**

- `src`: URL của ảnh avatar
- `alt`: Text mô tả cho accessibility
- `size`: Kích thước avatar (xs, sm, md, lg, xl)

## Props

| Name        | Type                                     | Default                    | Description                |
| ----------- | ---------------------------------------- | -------------------------- | -------------------------- |
| `src`       | `string`                                 | `"https://i.pravatar.cc/"` | URL của ảnh avatar         |
| `alt`       | `string`                                 | `"avatar"`                 | Alt text cho accessibility |
| `size`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`   | `undefined`                | Kích thước của avatar      |
| `rounded`   | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"`                     | Độ bo góc của avatar       |
| `className` | `string`                                 | `undefined`                | CSS class tùy chỉnh        |

## Variants / Options

### Sizes

```tsx
// Extra small
<Avatar src="/avatar.jpg" size="xs" />

// Small
<Avatar src="/avatar.jpg" size="sm" />

// Medium (default)
<Avatar src="/avatar.jpg" size="md" />

// Large
<Avatar src="/avatar.jpg" size="lg" />

// Extra large
<Avatar src="/avatar.jpg" size="xl" />
```

### Rounded Corners

```tsx
// Small rounded
<Avatar src="/avatar.jpg" rounded="sm" />

// Medium rounded (default)
<Avatar src="/avatar.jpg" rounded="md" />

// Large rounded
<Avatar src="/avatar.jpg" rounded="lg" />

// Extra large rounded
<Avatar src="/avatar.jpg" rounded="xl" />

// Fully rounded (circle)
<Avatar src="/avatar.jpg" rounded="full" />
```

### Error Handling

```tsx
// Avatar tự động fallback khi ảnh lỗi
<Avatar
	src="https://broken-link.jpg"
	alt="User Avatar"
	// Sẽ hiển thị placeholder khi ảnh không load được
/>
```

## Customization

### Custom Styling

```tsx
// Thêm border và shadow
<Avatar
  src="/avatar.jpg"
  className="border-2 border-blue-500 shadow-lg"
/>

// Custom size với Tailwind
<Avatar
  src="/avatar.jpg"
  className="w-20 h-20"
/>
```

### Combining with Other Components

```tsx
// Trong user card
<div className="flex items-center gap-3">
	<Avatar src="/user.jpg" size="md" rounded="full" />
	<div>
		<h3>John Doe</h3>
		<p>Software Engineer</p>
	</div>
</div>
```

## Best Practices

### ✅ Nên làm

- Luôn cung cấp `alt` text có ý nghĩa
- Sử dụng `rounded="full"` cho avatar tròn
- Cung cấp ảnh có tỷ lệ 1:1 (vuông) để tránh bị méo
- Sử dụng ảnh có độ phân giải phù hợp với size hiển thị

```tsx
// Good
<Avatar src="/high-quality-square-image.jpg" alt="John Doe's profile picture" size="lg" rounded="full" />
```

### ❌ Tránh làm

- Không bỏ qua `alt` text
- Không sử dụng ảnh có tỷ lệ không phù hợp
- Không dùng ảnh quá lớn cho avatar nhỏ

```tsx
// Bad
<Avatar src="/rectangular-image.jpg" /> // Thiếu alt, ảnh không vuông
```

## Accessibility

- **ARIA Support**: Component tự động hỗ trợ `alt` attribute cho screen readers
- **Keyboard Navigation**: Avatar có thể được focus nếu được wrap trong button hoặc link
- **High Contrast**: Hoạt động tốt với các theme high contrast

```tsx
// Accessible avatar trong button
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
	<Avatar src="/user.jpg" alt="Open user menu for John Doe" rounded="full" />
</button>
```

## Notes

### Fallback Behavior

- Component tự động fallback về placeholder khi ảnh không load được
- Fallback chỉ trigger một lần để tránh infinite loop
- Default placeholder: `"https://placehold.co/400?text=Avatar"`

### Performance

- Sử dụng `loading="lazy"` để tối ưu performance
- `decoding="async"` để không block UI thread

### Edge Cases

- Xử lý graceful khi `src` là empty string hoặc invalid URL
- Component vẫn render với placeholder khi không có `src`
- Tương thích với các image formats phổ biến (jpg, png, webp, svg)

```tsx
// Edge case handling
<Avatar src="" alt="No image available" /> // Hiển thị placeholder
<Avatar src={undefined} alt="Loading..." /> // Hiển thị default
```
