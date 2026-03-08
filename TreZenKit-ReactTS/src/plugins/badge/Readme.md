# Badge

## Overview

Badge component hiển thị thông tin ngắn gọn, trạng thái hoặc số đếm dưới dạng nhãn nhỏ. Component hỗ trợ nhiều variant khác nhau để phù hợp với các use case từ hiển thị trạng thái, thông báo đến đếm số lượng.

## Import

```typescript
import { Badge } from "trezinkit";
```

## Basic Usage

```tsx
<Badge variant="basic">New</Badge>
```

---

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
