# Tooltip

## Overview

Tooltip component hiển thị thông tin bổ sung khi hover vào element. Component sử dụng CSS-based approach với `data-tooltip` attribute và hỗ trợ 4 vị trí hiển thị khác nhau với smooth animations.

**Khi nào nên sử dụng:**

- Giải thích thêm về buttons, icons hoặc controls
- Hiển thị full text khi content bị truncated
- Cung cấp context help cho form fields
- Show keyboard shortcuts
- Display additional information without cluttering UI

## Installation

```bash
npm install trezinkit
```

## Import

```typescript
import { tooltipTop, tooltipBottom, tooltipLeft, tooltipRight } from "trezinkit";
```

## Basic Usage

```tsx
import { tooltipTop, tooltipBottom, tooltipLeft, tooltipRight } from "trezinkit";

function ButtonWithTooltips() {
	return (
		<div className="flex gap-4 p-8">
			{/* Top tooltip */}
			<button className={tooltipTop} data-tooltip="Save your changes">
				Save
			</button>

			{/* Bottom tooltip */}
			<button className={tooltipBottom} data-tooltip="Delete this item">
				Delete
			</button>

			{/* Left tooltip */}
			<button className={tooltipLeft} data-tooltip="Edit content">
				Edit
			</button>

			{/* Right tooltip */}
			<button className={tooltipRight} data-tooltip="Share with others">
				Share
			</button>
		</div>
	);
}
```

**Giải thích:**

- Import các tooltip classes tương ứng với vị trí mong muốn
- Sử dụng `data-tooltip` attribute để set nội dung tooltip
- Tooltip tự động hiển thị khi hover và ẩn khi không hover

## Props

| Name           | Type     | Default | Description                                |
| -------------- | -------- | ------- | ------------------------------------------ |
| `data-tooltip` | `string` | -       | Nội dung hiển thị trong tooltip (required) |
| `className`    | `string` | -       | CSS classes cho tooltip positioning        |

**Available Classes:**

- `tooltipTop` - Hiển thị tooltip phía trên
- `tooltipBottom` - Hiển thị tooltip phía dưới
- `tooltipLeft` - Hiển thị tooltip bên trái
- `tooltipRight` - Hiển thị tooltip bên phải

## Variants / Options

### Positioning

```tsx
// Top tooltip (default)
<button
  className={tooltipTop}
  data-tooltip="Tooltip appears above"
>
  Hover me
</button>

// Bottom tooltip
<button
  className={tooltipBottom}
  data-tooltip="Tooltip appears below"
>
  Hover me
</button>

// Left tooltip
<button
  className={tooltipLeft}
  data-tooltip="Tooltip appears on left"
>
  Hover me
</button>

// Right tooltip
<button
  className={tooltipRight}
  data-tooltip="Tooltip appears on right"
>
  Hover me
</button>
```

### Different Elements

```tsx
// Icon with tooltip
<div
  className={`${tooltipTop} inline-block cursor-help`}
  data-tooltip="This is a help icon"
>
  <HelpIcon className="w-5 h-5" />
</div>

// Text with tooltip
<span
  className={`${tooltipBottom} cursor-help border-b border-dashed`}
  data-tooltip="Additional information about this term"
>
  Technical term
</span>

// Image with tooltip
<img
  src="/avatar.jpg"
  alt="User"
  className={`${tooltipRight} cursor-pointer`}
  data-tooltip="John Doe - Software Engineer"
/>
```

### Long Content

```tsx
// Multi-line tooltip content
<button
  className={tooltipTop}
  data-tooltip="This is a longer tooltip that provides more detailed information"
>
  Info
</button>

// Tooltip with special characters
<button
  className={tooltipBottom}
  data-tooltip="Use Ctrl+S to save, Ctrl+Z to undo"
>
  Shortcuts
</button>
```

## Customization

### Custom Styling

```tsx
// Custom tooltip colors
<button
  className={`${tooltipTop} [&:after]:bg-blue-600 [&:before]:border-blue-600`}
  data-tooltip="Custom blue tooltip"
>
  Blue Tooltip
</button>

// Custom size
<button
  className={`${tooltipRight} [&:after]:text-sm [&:after]:py-1 [&:after]:px-2`}
  data-tooltip="Small tooltip"
>
  Small
</button>

// Custom rounded corners
<button
  className={`${tooltipLeft} [&:after]:rounded-xl`}
  data-tooltip="Rounded tooltip"
>
  Rounded
</button>
```

### Theme Variations

```tsx
// Success tooltip
<button
  className={`${tooltipTop} [&:after]:bg-green-600 [&:before]:border-green-600`}
  data-tooltip="Operation completed successfully"
>
  Success
</button>

// Warning tooltip
<button
  className={`${tooltipBottom} [&:after]:bg-yellow-600 [&:before]:border-yellow-600`}
  data-tooltip="Please review before proceeding"
>
  Warning
</button>

// Error tooltip
<button
  className={`${tooltipLeft} [&:after]:bg-red-600 [&:before]:border-red-600`}
  data-tooltip="This action cannot be undone"
>
  Danger
</button>
```

### Responsive Tooltips

```tsx
// Hide tooltip on mobile
<button
  className={`${tooltipTop} md:after:block after:hidden`}
  data-tooltip="Desktop only tooltip"
>
  Desktop Tooltip
</button>

// Different position on mobile
<button
  className={`${tooltipBottom} md:${tooltipTop}`}
  data-tooltip="Bottom on mobile, top on desktop"
>
  Responsive Position
</button>
```

## Best Practices

### ✅ Nên làm

- Giữ tooltip text ngắn gọn và informative
- Sử dụng tooltip cho elements có thể hover được
- Chọn vị trí tooltip phù hợp với layout
- Cung cấp meaningful information, không duplicate visible text

```tsx
// Good
<button
  className={tooltipTop}
  data-tooltip="Save changes (Ctrl+S)"
>
  💾
</button>

<span
  className={`${tooltipRight} truncate cursor-help`}
  data-tooltip="John Doe - Senior Frontend Developer at TechCorp"
>
  John D...
</span>
```

### ❌ Tránh làm

- Không sử dụng tooltip cho essential information
- Không làm tooltip text quá dài
- Không đặt tooltip trên elements không interactive
- Không duplicate content đã visible

```tsx
// Bad
<button
  className={tooltipTop}
  data-tooltip="Click this button to save your changes to the database permanently"
>
  Save
</button>

<span data-tooltip="Home">Home</span> // Duplicate content
```

## Accessibility

- **Keyboard Navigation**: Tooltip không hiển thị khi focus bằng keyboard (chỉ hover)
- **Screen Readers**: Nội dung tooltip không được đọc bởi screen readers
- **Alternative Approaches**: Cân nhắc sử dụng `aria-label` hoặc `title` cho accessibility

```tsx
// Enhanced accessibility
<button
  className={tooltipTop}
  data-tooltip="Save document"
  aria-label="Save document (Ctrl+S)"
  title="Save document"
>
  💾
</button>

// For critical information, use aria-describedby
<input
  type="password"
  className={tooltipRight}
  data-tooltip="Must be at least 8 characters"
  aria-describedby="password-help"
/>
<div id="password-help" className="sr-only">
  Password must be at least 8 characters long
</div>
```

## Notes

### CSS Implementation Details

- Sử dụng `::after` pseudo-element cho tooltip content
- `::before` pseudo-element tạo arrow/pointer
- `data-tooltip` attribute chứa nội dung
- Hover state trigger opacity changes với smooth transitions

### Technical Architecture

```css
/* Base tooltip structure */
.tooltip {
	position: relative;
}

.tooltip::after {
	content: attr(data-tooltip);
	position: absolute;
	background: #4b5563; /* gray-600 */
	color: white;
	padding: 6px 14px;
	border-radius: 8px;
	opacity: 0;
	transition: opacity 300ms;
	pointer-events: none;
	white-space: nowrap;
}

.tooltip:hover::after {
	opacity: 1;
}
```

### Performance Considerations

- CSS-only implementation, không cần JavaScript
- Lightweight với minimal DOM impact
- Smooth animations với CSS transitions
- No re-renders hoặc state management needed

### Browser Support

- Hỗ trợ tất cả modern browsers
- CSS `attr()` function có wide support
- Pseudo-elements work reliably across platforms

### Integration Patterns

```tsx
// With form validation
<div className="relative">
  <input
    type="email"
    className={`${hasError ? tooltipBottom : ''}`}
    data-tooltip={hasError ? errorMessage : ''}
  />
</div>

// Dynamic tooltip content
<button
  className={tooltipTop}
  data-tooltip={`${itemCount} items selected`}
>
  Selection
</button>

// Conditional tooltips
<div
  className={isDisabled ? tooltipRight : ''}
  data-tooltip={isDisabled ? 'Feature not available' : ''}
>
  <button disabled={isDisabled}>
    Action
  </button>
</div>
```

### Edge Cases

- Handle empty `data-tooltip` gracefully
- Long text wrapping behavior
- Tooltip positioning near viewport edges
- Multiple tooltips in close proximity

```tsx
// Safe usage patterns
<button
  className={tooltipText ? tooltipTop : ''}
  data-tooltip={tooltipText || ''}
>
  Conditional Tooltip
</button>

// Prevent overflow
<div className="overflow-hidden">
  <button
    className={`${tooltipTop} [&:after]:max-w-xs [&:after]:whitespace-normal`}
    data-tooltip="Very long tooltip content that might overflow"
  >
    Long Tooltip
  </button>
</div>
```

### Animation Customization

```tsx
// Faster animation
<button
  className={`${tooltipTop} [&:after]:duration-150 [&:before]:duration-150`}
  data-tooltip="Fast tooltip"
>
  Quick
</button>

// Delayed appearance
<button
  className={`${tooltipBottom} [&:after]:delay-500 [&:before]:delay-500`}
  data-tooltip="Delayed tooltip"
>
  Delayed
</button>
```
