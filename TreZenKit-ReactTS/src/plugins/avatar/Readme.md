# Avatar

Sử dụng Avatar component hiển thị hình đại diện của người dùng với khả năng tùy chỉnh kích thước, độ bo góc và xử lý lỗi tự động. Component được thiết kế để hiển thị ảnh profile, avatar trong danh sách người dùng, hoặc bất kỳ đâu cần đại diện trực quan cho một cá nhân.

---

## Cách dùng

### Import

```typescript
import { Avatar } from "trezinkit";
```

### Basic Usage

```tsx
<Avatar src="https://example.com/user-avatar.jpg" alt="John Doe" size="md" />
```

---

## Props

| Name        | Type                                     | Default                    | Description                |
| ----------- | ---------------------------------------- | -------------------------- | -------------------------- |
| `src`       | `string`                                 | `"https://i.pravatar.cc/"` | URL của ảnh avatar         |
| `alt`       | `string`                                 | `"avatar"`                 | Alt text cho accessibility |
| `size`      | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`   | `undefined`                | Kích thước của avatar      |
| `rounded`   | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"`                     | Độ bo góc của avatar       |
| `className` | `string`                                 | `undefined`                | CSS class tùy chỉnh        |
