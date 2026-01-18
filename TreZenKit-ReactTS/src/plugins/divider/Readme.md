# Divider

## Overview

Divider component tạo đường phân cách trực quan giữa các sections với khả năng hiển thị text label. Component hỗ trợ 3 vị trí đặt text (start, center, end) và có thể tùy chỉnh styling hoàn toàn.

**Khi nào nên sử dụng:**

- Phân tách các sections trong form
- Tách biệt content areas trong layout
- Tạo visual breaks trong danh sách dài
- Hiển thị category separators
- Phân chia các groups trong navigation

## Installation

```bash
npm install trezinkit
```

## Import

```typescript
import { Divider } from "trezinkit";
```

## Basic Usage

```tsx
import { Divider } from "trezinkit";

function ProfileForm() {
	return (
		<div className="space-y-6">
			<div>
				<h2>Personal Information</h2>
				{/* Form fields */}
			</div>

			<Divider>Contact Details</Divider>

			<div>{/* More form fields */}</div>

			<Divider placement="end">Optional</Divider>

			<div>{/* Optional fields */}</div>
		</div>
	);
}
```

**Giải thích:**

- `children`: Text hiển thị trên divider line
- `placement`: Vị trí của text (start, default/center, end)
- Component tự động tạo background trắng cho text

## Props

| Name        | Type                            | Default     | Description                                        |
| ----------- | ------------------------------- | ----------- | -------------------------------------------------- |
| `children`  | `ReactNode`                     | -           | Text hoặc content hiển thị trên divider (required) |
| `placement` | `"start" \| "default" \| "end"` | `"default"` | Vị trí của text trên divider                       |
| `className` | `string`                        | `undefined` | CSS class tùy chỉnh                                |

## Variants / Options

### Text Placement

```tsx
// Text ở đầu (left)
<Divider placement="start">
  Section Start
</Divider>

// Text ở giữa (center) - default
<Divider placement="default">
  Section Center
</Divider>

// Text ở cuối (right)
<Divider placement="end">
  Section End
</Divider>
```

### Different Content Types

```tsx
// Simple text
<Divider>Personal Info</Divider>

// With icons
<Divider>
  <span className="flex items-center gap-2">
    <UserIcon className="w-4 h-4" />
    User Settings
  </span>
</Divider>

// With badges
<Divider>
  <span className="flex items-center gap-2">
    Advanced Settings
    <Badge variant="basic" className="text-xs">Pro</Badge>
  </span>
</Divider>

// Numbers or steps
<Divider>Step 2 of 3</Divider>
```

### Plain Divider (No Text)

```tsx
// For plain divider without text, use a space or empty span
<Divider> </Divider>

// Or minimal content
<Divider>
  <span className="sr-only">Section break</span>
</Divider>
```

## Customization

### Custom Colors

```tsx
// Custom divider color
<Divider className="bg-blue-200">
  Blue Section
</Divider>

// Custom text styling
<Divider className="after:text-blue-600 after:font-semibold">
  Important Section
</Divider>

// Custom background for text
<Divider className="after:bg-blue-50 after:text-blue-700">
  Highlighted Section
</Divider>
```

### Different Thickness

```tsx
// Thicker divider
<Divider className="h-0.5">
  Thick Divider
</Divider>

// Thinner divider
<Divider className="h-px">
  Thin Divider
</Divider>
```

### Custom Spacing

```tsx
// More padding around text
<Divider className="after:px-8">
  Spacious Text
</Divider>

// Larger text
<Divider className="after:text-base after:font-medium">
  Large Text
</Divider>
```

### Gradient Dividers

```tsx
// Gradient background
<Divider className="bg-gradient-to-r from-transparent via-gray-300 to-transparent">
  Gradient Section
</Divider>

// Colored gradient
<Divider className="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
  Colorful Section
</Divider>
```

## Best Practices

### ✅ Nên làm

- Sử dụng text ngắn gọn, mô tả rõ section
- Chọn placement phù hợp với layout direction
- Giữ consistent styling trong cùng một page
- Sử dụng semantic text cho screen readers

```tsx
// Good
<Divider placement="start">Account Settings</Divider>
<Divider>Privacy & Security</Divider>
<Divider placement="end">Advanced Options</Divider>
```

### ❌ Tránh làm

- Không sử dụng text quá dài
- Không overuse dividers trong layout nhỏ
- Không quên accessibility cho screen readers
- Không sử dụng quá nhiều custom colors

```tsx
// Bad
<Divider>
  This is a very long section title that should be much shorter
</Divider>

// Too many dividers
<Divider>Section 1</Divider>
<p>Short content</p>
<Divider>Section 2</Divider>
<p>Short content</p>
<Divider>Section 3</Divider>
```

## Accessibility

- **Screen Readers**: Text content được đọc bởi screen readers
- **Semantic Meaning**: Sử dụng meaningful text để mô tả sections
- **Visual Hierarchy**: Divider giúp tạo clear visual structure

```tsx
// Accessible divider with clear meaning
<Divider>
  <span role="separator" aria-label="Personal information section">
    Personal Information
  </span>
</Divider>

// Hidden text for screen readers
<Divider>
  Contact Details
  <span className="sr-only">- Required fields</span>
</Divider>
```

## Notes

### CSS Implementation Details

- Sử dụng `data-divider` attribute để pass content
- `::after` pseudo-element hiển thị text
- Background trắng tự động cho text overlay
- Responsive positioning với CSS transforms

### Styling Architecture

```css
/* Component sử dụng CSS classes như: */
.divider {
	position: relative;
	width: 100%;
	height: 1px;
	background: #cbd5e1; /* slate-300 */
}

.divider::after {
	content: attr(data-divider);
	position: absolute;
	background: white;
	padding: 1px 20px;
	font-size: 0.875rem;
	/* Positioning based on placement prop */
}
```

### Performance Considerations

- Lightweight component với minimal DOM footprint
- CSS-based implementation, không cần JavaScript
- Efficient rendering với single element

### Layout Integration

```tsx
// In forms
<form className="space-y-6">
  <div>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
  </div>

  <Divider>Additional Information</Divider>

  <div>
    <textarea placeholder="Bio"></textarea>
  </div>
</form>

// In cards
<div className="bg-white rounded-lg p-6">
  <h2>User Profile</h2>

  <Divider className="my-4">Settings</Divider>

  <div>
    {/* Settings content */}
  </div>
</div>
```

### Edge Cases

- Handle empty children gracefully
- Support complex ReactNode content
- Maintain proper spacing in different layouts

```tsx
// Safe usage patterns
<Divider>{sectionTitle || 'Untitled Section'}</Divider>

// Complex content
<Divider>
  <div className="flex items-center justify-between w-full max-w-xs">
    <span>Section Title</span>
    <button className="text-xs text-blue-600">Edit</button>
  </div>
</Divider>

// Conditional rendering
{showDivider && (
  <Divider placement="start">
    {isEditing ? 'Edit Mode' : 'View Mode'}
  </Divider>
)}
```

### Responsive Behavior

```tsx
// Responsive text size
<Divider className="after:text-sm md:after:text-base">
  Responsive Section
</Divider>

// Hide on mobile
<Divider className="hidden md:block">
  Desktop Only Section
</Divider>

// Different placement on mobile
<Divider className="after:left-4 md:after:left-1/2 md:after:-translate-x-1/2">
  Responsive Placement
</Divider>
```
