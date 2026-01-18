# Button

## Overview

Button component cung cấp các nút tương tác với nhiều variants, sizes và styling options. Component được thiết kế với gradient effects, flexible sizing system và hỗ trợ đầy đủ các HTML button attributes.

**Khi nào nên sử dụng:**

- Primary actions (Submit, Save, Continue)
- Secondary actions (Cancel, Back, Edit)
- Call-to-action buttons trong landing pages
- Form submissions và user interactions
- Navigation actions và menu triggers

## Installation

```bash
npm install trezinkit
```

## Import

```typescript
import { Button } from "trezinkit";
```

## Basic Usage

```tsx
import { Button } from "trezinkit";

function LoginForm() {
	return (
		<div className="space-y-4">
			{/* Primary button */}
			<Button variant="Primary" onClick={() => console.log("Login")}>
				Login
			</Button>

			{/* Outline gradient button */}
			<Button variant="OutlineGradient" onClick={() => console.log("Sign up")}>
				Sign Up
			</Button>
		</div>
	);
}
```

**Giải thích:**

- `variant`: Kiểu button (Primary, OutlineGradient)
- `onClick`: Handler function khi click
- `children`: Nội dung hiển thị trong button

## Props

| Name           | Type                                                                                 | Default     | Description                |
| -------------- | ------------------------------------------------------------------------------------ | ----------- | -------------------------- |
| `variant`      | `"Primary" \| "OutlineGradient"`                                                     | `"Primary"` | Kiểu button                |
| `children`     | `ReactNode`                                                                          | -           | Nội dung button (required) |
| `onClick`      | `() => void`                                                                         | `undefined` | Click handler              |
| `disabled`     | `boolean`                                                                            | `false`     | Disable button             |
| `className`    | `string`                                                                             | `undefined` | CSS class tùy chỉnh        |
| `size`         | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10`                                    | `5`         | Kích thước button          |
| `rounded`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "full"` | `"md"`      | Độ bo góc                  |
| `ShowGradient` | `"t" \| "tr" \| "tl" \| "b" \| "br" \| "bl" \| "r" \| "l" \| "none"`                 | `"none"`    | Hướng gradient             |

_Kế thừa tất cả HTML button attributes_

## Variants / Options

### Button Variants

```tsx
// Primary button - solid background
<Button variant="Primary">
  Primary Action
</Button>

// Outline gradient - gradient border with hover effect
<Button variant="OutlineGradient">
  Gradient Outline
</Button>
```

### Size Options

```tsx
// Extra small - icon buttons, table actions
<Button variant="Primary" size={1}>XS</Button>

// Small - compact UI, secondary actions
<Button variant="Primary" size={2}>Small</Button>

// Default - standard button
<Button variant="Primary" size={5}>Default</Button>

// Large - primary CTA
<Button variant="Primary" size={7}>Large</Button>

// Extra large - hero sections
<Button variant="Primary" size={9}>XL</Button>

// Huge - marketing/showcase
<Button variant="Primary" size={10}>Huge</Button>
```

### Rounded Options

```tsx
// Minimal rounding
<Button variant="Primary" rounded="xs">Minimal</Button>

// Standard rounding (default)
<Button variant="Primary" rounded="md">Standard</Button>

// Large rounding
<Button variant="Primary" rounded="xl">Large</Button>

// Pill shape
<Button variant="Primary" rounded="full">Pill</Button>
```

### Gradient Directions

```tsx
// Top-right gradient (default for OutlineGradient)
<Button variant="OutlineGradient" ShowGradient="tr">
  Top Right
</Button>

// Bottom gradient
<Button variant="Primary" ShowGradient="b">
  Bottom Gradient
</Button>

// Right gradient
<Button variant="Primary" ShowGradient="r">
  Right Gradient
</Button>

// No gradient
<Button variant="Primary" ShowGradient="none">
  No Gradient
</Button>
```

## Customization

### Custom Colors

```tsx
// Custom primary color
<Button
  variant="Primary"
  className="bg-green-500 hover:bg-green-600"
>
  Success
</Button>

// Custom outline gradient
<Button
  variant="OutlineGradient"
  className="from-purple-500 to-pink-500 text-purple-600"
>
  Custom Gradient
</Button>
```

### With Icons

```tsx
// Icon + text
<Button variant="Primary" className="flex items-center gap-2">
  <PlusIcon className="w-4 h-4" />
  Add Item
</Button>

// Icon only
<Button variant="Primary" size={3} rounded="full">
  <SearchIcon className="w-4 h-4" />
</Button>

// Loading state
<Button variant="Primary" disabled className="flex items-center gap-2">
  <Spinner className="w-4 h-4 animate-spin" />
  Loading...
</Button>
```

### Button Groups

```tsx
// Horizontal group
<div className="flex gap-2">
  <Button variant="Primary">Save</Button>
  <Button variant="OutlineGradient">Cancel</Button>
</div>

// Vertical group
<div className="flex flex-col gap-2">
  <Button variant="Primary" className="w-full">
    Primary Action
  </Button>
  <Button variant="OutlineGradient" className="w-full">
    Secondary Action
  </Button>
</div>
```

## Best Practices

### ✅ Nên làm

- Sử dụng Primary cho main actions, OutlineGradient cho secondary
- Chọn size phù hợp với context (size 5 cho general use)
- Cung cấp meaningful text cho button content
- Sử dụng disabled state khi action không available

```tsx
// Good
<Button variant="Primary" size={5} onClick={handleSubmit} disabled={isLoading}>
	{isLoading ? "Submitting..." : "Submit Form"}
</Button>
```

### ❌ Tránh làm

- Không sử dụng quá nhiều Primary buttons trong một khu vực
- Không làm button text quá dài
- Không quên handle loading/disabled states
- Không sử dụng size quá lớn cho actions thường xuyên

```tsx
// Bad
<Button variant="Primary" size={10}>
	This is a very long button text that should be avoided
</Button>
```

## Accessibility

- **Keyboard Support**: Hỗ trợ Enter và Space key activation
- **Focus Management**: Proper focus indicators và tab navigation
- **Screen Readers**: Button content được đọc chính xác
- **Disabled State**: Proper ARIA attributes khi disabled

```tsx
// Accessible button with ARIA
<Button
  variant="Primary"
  onClick={handleDelete}
  aria-label="Delete user account"
  aria-describedby="delete-warning"
>
  Delete Account
</Button>

// Loading state accessibility
<Button
  variant="Primary"
  disabled={isLoading}
  aria-busy={isLoading}
  aria-label={isLoading ? 'Processing...' : 'Submit form'}
>
  {isLoading ? 'Processing...' : 'Submit'}
</Button>
```

## Notes

### forwardRef Support

- Component sử dụng forwardRef để hỗ trợ ref forwarding
- Có thể access DOM element trực tiếp

```tsx
const buttonRef = useRef<HTMLButtonElement>(null);

<Button ref={buttonRef} variant="Primary" onClick={() => buttonRef.current?.focus()}>
	Focus Me
</Button>;
```

### Performance Considerations

- Component được optimize với proper displayName
- Gradient effects sử dụng CSS transitions
- Không re-render unnecessary khi props không thay đổi

### Form Integration

```tsx
// Form submission
<form onSubmit={handleSubmit}>
  <Button
    variant="Primary"
    type="submit"
    disabled={!isValid}
  >
    Submit Form
  </Button>
</form>

// Reset button
<Button
  variant="OutlineGradient"
  type="reset"
  onClick={() => form.reset()}
>
  Reset
</Button>
```

### Edge Cases

- Handle undefined onClick gracefully
- Support all HTML button attributes
- Proper disabled state styling

```tsx
// Safe usage patterns
<Button variant="Primary" onClick={handleClick || undefined}>
  Safe Click
</Button>

// Custom button type
<Button
  variant="Primary"
  type="button" // Explicit type
  form="my-form" // Form association
>
  External Form Submit
</Button>
```

### Gradient Background Classes

- Gradient directions: `t`, `tr`, `tl`, `b`, `br`, `bl`, `r`, `l`, `none`
- Custom CSS classes: `bg-linear-to-*` cho các hướng gradient
- OutlineGradient variant có built-in gradient từ cyan-500 đến blue-500

```tsx
// Custom gradient directions
<Button variant="Primary" ShowGradient="br">
  Bottom Right Gradient
</Button>

<Button variant="Primary" ShowGradient="l">
  Left Gradient
</Button>
```
