TreZenKit là một thư viện UI components nhẹ, được xây dựng dành riêng cho React (v19+) sử dụng Tailwind CSS thuần túy. Không phụ thuộc vào các thư viện headless phức tạp, thư viện này tập trung vào tính đơn giản, tùy biến cao và hiệu suất tốt. Các components được thiết kế responsive, hỗ trợ dark/light mode, và dễ dàng tích hợp vào bất kỳ dự án React nào.

Dựa trên các thực tiễn tốt nhất từ cộng đồng (như hướng dẫn Tailwind với React trên Viblo và Evotek Careers), thư viện này giúp bạn xây dựng giao diện nhanh chóng mà không cần viết CSS thủ công nhiều.

Nội Dung



\* Tính Năng

\* Cài Đặt

\* Sử Dụng

\* Components

\* Tùy Chỉnh

\* Storybook

\* Đóng Góp

\* Giấy Phép

\* Liên Hệ



Tính Năng



\* Thuần túy và nhẹ: Chỉ sử dụng React và Tailwind CSS classes, bundle size dưới 10KB (không bundle Tailwind).

\* Responsive: Tất cả components hỗ trợ mobile-first với Tailwind's breakpoints.

\* Variants: Hỗ trợ các biến thể (size, color, state) qua props.

\* Accessibility: Tuân thủ WCAG với ARIA attributes và keyboard navigation.

\* TypeScript: Full type safety cho props.

\* Theming: Dễ dàng tùy chỉnh theme qua Tailwind config.

\* No dependencies: Chỉ cần React và Tailwind làm peer dependencies.



Cài Đặt



1\. 

Cài đặt thư viện:

bashDownloadCopy codenpm install trezenkit

\# hoặc

pnpm add trezenkit



2\. 

Cài đặt peer dependencies (nếu chưa có):

bashDownloadCopy codenpm install react@^18 tailwindcss@^3 clsx

\# hoặc

pnpm add react@^18 tailwindcss@^3 clsx



3\. 

Config Tailwind CSS trong dự án của bạn (tailwind.config.js):

jsDownloadCopy codemodule.exports = {

&nbsp; content: \[

&nbsp;   './src/\*\*/\*.{js,jsx,ts,tsx}',

&nbsp;   './node\_modules/trezenkit/dist/\*\*/\*.{js,jsx,ts,tsx}', // Thêm dòng này

&nbsp; ],

&nbsp; theme: {

&nbsp;   extend: {

&nbsp;     colors: {

&nbsp;       primary: '#1E40AF', // Màu tùy chỉnh (xanh Việt)

&nbsp;       secondary: '#DC2626', // Đỏ sen

&nbsp;     },

&nbsp;   },

&nbsp; },

&nbsp; plugins: \[],

};



4\. 

Import CSS (nếu cần global styles, nhưng thường không bắt buộc vì utility-first):



Thêm vào index.css: @import 'trezenkit/dist/styles.css'; (nếu thư viện export CSS base).





5\. 

Sử dụng trong app:



Import components: import { Button } from 'trezenkit';







Xây dựng dự án của bạn để purge unused classes: npm run build hoặc pnpm run build.

Sử Dụng

Sau khi cài đặt, bạn có thể import và sử dụng components ngay lập tức. Các components chấp nhận className prop để override styles.

Ví Dụ Cơ Bản

tsxDownloadCopy codeimport React from 'react';

import { Button, Card } from 'trezenkit';



function App() {

&nbsp; return (

&nbsp;   <div className="p-8 bg-gray-100 min-h-screen">

&nbsp;     <Card className="max-w-md mx-auto">

&nbsp;       <h1 className="text-2xl font-bold mb-4">Chào mừng đến với TreZenKit!</h1>

&nbsp;       <Button variant="primary" size="lg">

&nbsp;         Click Me

&nbsp;       </Button>

&nbsp;     </Card>

&nbsp;   </div>

&nbsp; );

}



export default App;

Components

Thư viện hiện bao gồm các components cơ bản sau (danh sách sẽ mở rộng):

Button

Một button linh hoạt với variants.

Props:



\* variant: 'primary' | 'secondary' | 'outline' (mặc định: 'primary')

\* size: 'sm' | 'md' | 'lg' (mặc định: 'md')

\* children: Nội dung button

\* className: Override classes

\* Các props HTML button khác



Ví dụ:

tsxDownloadCopy code<Button variant="primary" size="lg" onClick={() => alert('Clicked!')}>

&nbsp; Primary Large

</Button>



<Button variant="outline" size="sm" disabled>

&nbsp; Outline Small (Disabled)

</Button>

Card

Container với shadow và padding.

Props:



\* className: Override

\* children: Nội dung



Ví dụ:

tsxDownloadCopy code<Card className="p-6 shadow-lg">

&nbsp; <h2 className="text-xl mb-2">Nội dung Card</h2>

&nbsp; <p>Đây là mô tả.</p>

</Card>

Input

Input field với focus states.

Props:



\* type: 'text' | 'email' | 'password' (mặc định: 'text')

\* placeholder

\* className

\* Các props HTML input khác



Ví dụ:

tsxDownloadCopy code<Input type="email" placeholder="Nhập email" className="w-full" />

Modal

Modal dialog với overlay.

Props:



\* isOpen: boolean

\* onClose: () => void

\* title: string

\* children



Ví dụ:

tsxDownloadCopy codeconst \[open, setOpen] = useState(false);

<Modal isOpen={open} onClose={() => setOpen(false)} title="Modal Title">

&nbsp; Nội dung modal.

</Modal>

Xem đầy đủ API docs trong Storybook hoặc source code.

Tùy Chỉnh



\* Theme: Override colors/spacing trong tailwind.config.js (xem phần Cài Đặt).

\* Classes: Sử dụng className prop để thêm Tailwind classes tùy chỉnh.

\* Dark Mode: Thư viện hỗ trợ dark: prefix tự động nếu Tailwind config có darkMode: 'class'.

\* Animations: Thêm transitions qua classes (e.g., transition-all).



Nếu cần custom sâu, fork repo và build lại.

Storybook

Thư viện có Storybook để demo và test components. Chạy local:

bashDownloadCopy codenpm install -g @storybook/cli  # Nếu chưa có

npx storybook

\# hoặc với pnpm

pnpm dlx @storybook/cli init

Truy cập: http://localhost:6006

Deploy: https://trezenkit-storybook.netlify.app (link demo).

Đóng Góp

Chúng tôi hoan nghênh contributions! Các bước:



1\. Fork repo.

2\. Tạo branch: git checkout -b feature/new-component.

3\. Commit changes: git commit -m 'Add new component'.

4\. Push: git push origin feature/new-component.

5\. Tạo Pull Request.





\* Sử dụng Prettier/ESLint cho code style.

\* Thêm tests với Vitest.

\* Cập nhật docs và stories.



Xem CONTRIBUTING.md để chi tiết.

Giấy Phép

MIT License. Xem LICENSE file.

Liên Hệ



\* Author: Your Name

\* Repo: github.com/yourusername/trezenkit

\* Issues: github.com/yourusername/trezenkit/issues

\* Twitter: @yourhandle



Cảm ơn bạn đã sử dụng TreZenKit! Nếu có feedback, hãy mở issue. 🚀



Last updated: January 05, 2026

Built with ❤️ using React, Tailwind CSS, and Vite.

