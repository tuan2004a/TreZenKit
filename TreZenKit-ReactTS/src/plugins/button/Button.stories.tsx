// stories/Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

// Import the actual types expected by the Button component.
// Based on your error message, the component expects 'BtnSize', so we should import that
// instead of the generic 'Size' if they differ.
import type { BtnSize, BtnRounded } from "./shared/index";

// Define options explicitly using the Component's types.
// This ensures that the hardcoded values match the allowed props.
const SIZE_OPTIONS: BtnSize[] = ["sm", "md", "lg"];
const ROUNDED_OPTIONS: BtnRounded[] = ["xs", "sm", "md", "lg", "xl"];
const VARIANT_OPTIONS = ["primary", "secondary", "outline", "ghost", "destructive"] as const;

// ============================================================================
// 1. META CONFIGURATION
// ============================================================================
const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: "Component Button hỗ trợ Size/Rounded từ shared config.",
			},
		},
	},
	argTypes: {
		size: {
			control: "select",
			options: SIZE_OPTIONS,
			description: "Kích thước (match shared BtnSize).",
			table: { defaultValue: { summary: "md" } },
		},
		rounded: {
			control: "select",
			options: ROUNDED_OPTIONS,
			description: "Độ bo góc (match shared BtnRounded).",
			table: { defaultValue: { summary: "md" } },
		},
		variant: {
			control: "select",
			options: VARIANT_OPTIONS,
			description: "Kiểu hiển thị.",
			table: { defaultValue: { summary: "primary" } },
		},
		disabled: {
			control: "boolean",
			description: "Trạng thái disabled.",
		},
		children: {
			control: "text",
			description: "Nội dung button.",
		},
		className: {
			control: "text",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

// ============================================================================
// 2. STORIES
// ============================================================================

export const Default: Story = {
	args: {
		children: "Default Button",
		variant: "primary",
		size: "md",
		rounded: "md",
	},
};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-4">
			{SIZE_OPTIONS.map((size) => (
				<Button key={size} {...args} size={size}>
					{size.toUpperCase()}
				</Button>
			))}
		</div>
	),
	args: {
		variant: "primary",
		rounded: "md",
	},
};

// RENAMED: Changed 'Rounded' to 'RoundedVariants' to fix "merged declaration" error.
export const RoundedVariants: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			{ROUNDED_OPTIONS.map((round) => (
				<Button key={round} {...args} rounded={round}>
					{round.toUpperCase()}
				</Button>
			))}
		</div>
	),
	args: {
		children: "Rounded",
		variant: "primary",
		size: "md",
	},
};

export const Variants: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			{VARIANT_OPTIONS.map((variant) => (
				<Button key={variant} {...args} variant={variant}>
					{variant.charAt(0).toUpperCase() + variant.slice(1)}
				</Button>
			))}
		</div>
	),
	args: {
		children: "Variant",
		size: "md",
		rounded: "md",
	},
};

export const Disabled: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			<Button {...args} variant="primary" disabled>
				Primary (Disabled)
			</Button>
			<Button {...args} variant="secondary" disabled>
				Secondary (Disabled)
			</Button>
			<Button {...args} variant="outline" disabled>
				Outline (Disabled)
			</Button>
		</div>
	),
	args: {
		children: "Disabled",
		size: "md",
		rounded: "md",
	},
};

export const WithIcon: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-4">
			<Button {...args} variant="primary">
				➕ Add
			</Button>
			<Button {...args} variant="primary">
				📥 Download
			</Button>
			<Button {...args} variant="primary">
				🔍 Search
			</Button>
		</div>
	),
	args: {
		size: "md",
		rounded: "md",
	},
	parameters: {
		docs: {
			description: {
				story: "Unicode icons (no lib). Import <Icon /> từ shared nếu có.",
			},
		},
	},
};
