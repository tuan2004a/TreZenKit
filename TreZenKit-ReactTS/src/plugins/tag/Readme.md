# Tag

## Overview

Tag component hiển thị nhãn ngắn gọn để phân loại, đánh dấu trạng thái hoặc highlight thông tin. Component hỗ trợ nhiều variants, sizes, colors và có thể tương tác (removable, clickable).

**Khi nào nên sử dụng:**

- Phân loại content (categories, labels)
- Hiển thị trạng thái (status, priority)
- Keywords và hashtags
- Filter tags trong search
- Skill tags trong profiles
- Product attributes và features

## Installation

```bash
npm install trezinkit
```

## Import

```typescript
import { Tag } from "trezinkit";
```

## Basic Usage

```tsx
import { Tag } from "trezinkit";

function ProductCard() {
	return (
		<div className="space-y-4">
			{/* Basic tags */}
			<div className="flex gap-2">
				<Tag>React</Tag>
				<Tag>TypeScript</Tag>
				<Tag>UI Library</Tag>
			</div>

			{/* Status tags */}
			<div className="flex gap-2">
				<Tag variant="success">Active</Tag>
				<Tag variant="warning">Pending</Tag>
				<Tag variant="danger">Inactive</Tag>
			</div>

			{/* Interactive tags */}
			<div className="flex gap-2">
				<Tag onRemove={() => console.log("Remove tag")}>Removable</Tag>
				<Tag onClick={() => console.log("Tag clicked")}>Clickable</Tag>
			</div>
		</div>
	);
}
```

**Giải thích:**

- `children`: Nội dung hiển thị trong tag
- `variant`: Kiểu tag (default, success, warning, danger, info)
- `onRemove`: Handler để xóa tag
- `onClick`: Handler khi click vào tag

## Props

| Name        | Type                                                                     | Default     | Description                        |
| ----------- | ------------------------------------------------------------------------ | ----------- | ---------------------------------- |
| `children`  | `ReactNode`                                                              | -           | Nội dung tag (required)            |
| `variant`   | `"default" \| "success" \| "warning" \| "danger" \| "info" \| "neutral"` | `"default"` | Kiểu màu sắc                       |
| `size`      | `"sm" \| "md" \| "lg"`                                                   | `"md"`      | Kích thước tag                     |
| `rounded`   | `"sm" \| "md" \| "lg" \| "full"`                                         | `"md"`      | Độ bo góc                          |
| `onClick`   | `() => void`                                                             | `undefined` | Click handler                      |
| `onRemove`  | `() => void`                                                             | `undefined` | Remove handler (hiển thị X button) |
| `disabled`  | `boolean`                                                                | `false`     | Disable tag interactions           |
| `className` | `string`                                                                 | `undefined` | CSS class tùy chỉnh                |

## Variants / Options

### Color Variants

```tsx
// Default (neutral)
<Tag>Default</Tag>

// Success (green)
<Tag variant="success">Success</Tag>

// Warning (yellow/orange)
<Tag variant="warning">Warning</Tag>

// Danger (red)
<Tag variant="danger">Error</Tag>

// Info (blue)
<Tag variant="info">Information</Tag>

// Neutral (gray)
<Tag variant="neutral">Neutral</Tag>
```

### Sizes

```tsx
// Small
<Tag size="sm">Small Tag</Tag>

// Medium (default)
<Tag size="md">Medium Tag</Tag>

// Large
<Tag size="lg">Large Tag</Tag>
```

### Rounded Options

```tsx
// Small rounded
<Tag rounded="sm">Minimal</Tag>

// Medium rounded (default)
<Tag rounded="md">Standard</Tag>

// Large rounded
<Tag rounded="lg">Rounded</Tag>

// Pill shape
<Tag rounded="full">Pill</Tag>
```

### Interactive Tags

```tsx
// Clickable tag
<Tag onClick={() => handleTagClick('react')}>
  React
</Tag>

// Removable tag
<Tag onRemove={() => handleRemoveTag('typescript')}>
  TypeScript
</Tag>

// Both clickable and removable
<Tag
  onClick={() => handleTagClick('javascript')}
  onRemove={() => handleRemoveTag('javascript')}
>
  JavaScript
</Tag>

// Disabled tag
<Tag disabled>
  Disabled
</Tag>
```

## Customization

### Custom Colors

```tsx
// Custom background and text
<Tag className="bg-purple-100 text-purple-700 border-purple-200">
  Custom Purple
</Tag>

// Gradient tag
<Tag className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
  Gradient
</Tag>

// Outline style
<Tag className="bg-transparent border-2 border-blue-500 text-blue-600">
  Outline
</Tag>
```

### With Icons

```tsx
// Icon + text
<Tag className="flex items-center gap-1">
  <StarIcon className="w-3 h-3" />
  Featured
</Tag>

// Icon only
<Tag size="sm" rounded="full">
  <HeartIcon className="w-3 h-3" />
</Tag>

// Status with icon
<Tag variant="success" className="flex items-center gap-1">
  <CheckIcon className="w-3 h-3" />
  Verified
</Tag>
```

### Tag Groups

```tsx
// Horizontal group
<div className="flex flex-wrap gap-2">
  {tags.map(tag => (
    <Tag key={tag.id} onRemove={() => removeTag(tag.id)}>
      {tag.name}
    </Tag>
  ))}
</div>

// Vertical group
<div className="flex flex-col gap-2">
  <Tag>Category 1</Tag>
  <Tag>Category 2</Tag>
  <Tag>Category 3</Tag>
</div>
```

## Best Practices

### ✅ Nên làm

- Sử dụng màu sắc có ý nghĩa (đỏ cho error, xanh cho success)
- Giữ text ngắn gọn, dễ đọc
- Nhóm related tags lại với nhau
- Cung cấp clear action cho interactive tags

```tsx
// Good
<div className="flex flex-wrap gap-2">
	<Tag variant="success">Published</Tag>
	<Tag variant="info">Featured</Tag>
	<Tag onRemove={() => removeSkill("react")}>React</Tag>
</div>
```

### ❌ Tránh làm

- Không sử dụng text quá dài
- Không overuse màu sắc bright
- Không quên handle remove/click actions
- Không làm tags quá nhỏ để khó click

```tsx
// Bad
<Tag>This is a very long tag text that should be avoided</Tag>
<Tag className="bg-neon-pink text-neon-green">Hard to read</Tag>
```

## Accessibility

- **Keyboard Support**: Tab navigation và Enter/Space activation
- **Screen Readers**: Proper ARIA labels cho interactive elements
- **Focus Management**: Clear focus indicators
- **Color Contrast**: Đảm bảo sufficient contrast ratios

```tsx
// Accessible removable tag
<Tag
  onRemove={() => removeTag('react')}
  aria-label="Remove React tag"
>
  React
</Tag>

// Accessible clickable tag
<Tag
  onClick={() => filterByTag('frontend')}
  role="button"
  tabIndex={0}
  aria-label="Filter by Frontend tag"
>
  Frontend
</Tag>
```

## Notes

### State Management

- Handle tag collections với proper state management
- Implement optimistic updates cho better UX

```tsx
// Tag management example
const [tags, setTags] = useState(["React", "TypeScript", "CSS"]);

const removeTag = (tagToRemove: string) => {
	setTags(tags.filter((tag) => tag !== tagToRemove));
};

const addTag = (newTag: string) => {
	if (!tags.includes(newTag)) {
		setTags([...tags, newTag]);
	}
};

// Render tags
{
	tags.map((tag) => (
		<Tag key={tag} onRemove={() => removeTag(tag)}>
			{tag}
		</Tag>
	));
}
```

### Performance Considerations

- Sử dụng React.memo cho tag lists lớn
- Implement virtualization nếu có hàng nghìn tags
- Debounce search/filter operations

```tsx
// Memoized tag component
const MemoizedTag = React.memo(Tag);

// Efficient tag list
{
	tags.map((tag) => (
		<MemoizedTag key={tag.id} onRemove={() => removeTag(tag.id)}>
			{tag.name}
		</MemoizedTag>
	));
}
```

### Integration Patterns

```tsx
// With search/filter
const [selectedTags, setSelectedTags] = useState<string[]>([]);
const [availableTags] = useState(["React", "Vue", "Angular"]);

// Filter interface
<div className="space-y-4">
	<div className="flex flex-wrap gap-2">
		{availableTags.map((tag) => (
			<Tag key={tag} onClick={() => toggleTag(tag)} className={selectedTags.includes(tag) ? "bg-blue-500 text-white" : ""}>
				{tag}
			</Tag>
		))}
	</div>

	{/* Selected tags */}
	<div className="flex flex-wrap gap-2">
		{selectedTags.map((tag) => (
			<Tag key={tag} onRemove={() => removeSelectedTag(tag)}>
				{tag}
			</Tag>
		))}
	</div>
</div>;
```

### Edge Cases

- Handle empty tag content
- Manage very long tag names
- Support RTL languages
- Handle rapid add/remove operations

```tsx
// Safe tag rendering
<Tag>
	<span className="truncate max-w-32" title={fullTagName}>
		{truncatedTagName}
	</span>
</Tag>;

// Conditional rendering
{
	tagName && <Tag onRemove={() => removeTag(tagId)}>{tagName}</Tag>;
}
```

### Animation Support

```tsx
// Smooth remove animation
<Tag
  className="transition-all duration-200 hover:scale-105"
  onRemove={() => removeTag(id)}
>
  Animated Tag
</Tag>

// Entrance animation
<Tag className="animate-fadeIn">
  New Tag
</Tag>
```
