interface TitleProps {
	title: string | undefined;
}

const Title = ({ title }: TitleProps) => {
	return <div>{title}</div>;
};

export default Title;
