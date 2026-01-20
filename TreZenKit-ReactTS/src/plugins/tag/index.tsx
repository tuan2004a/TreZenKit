import type { TagBasicProps } from "./interface";
import { TagBasic, TagRemovable } from "./variants";

const Tag = (props: TagBasicProps) => {
	const { variants = "basic", children } = props as any;

	switch (variants) {
		case "basic":
			return <TagBasic>{children}</TagBasic>;

		case "removable":
			return <TagRemovable>{children}</TagRemovable>;

		default:
			throw new Error(`Unsupported variant: ${variants}`);
	}
};
Tag.displayName = "Tag";

export default Tag;
