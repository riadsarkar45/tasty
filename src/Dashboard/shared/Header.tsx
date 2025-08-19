type HeaderProps = {
    heading: string;
};

const Header = ({ heading }: HeaderProps) => {
    return (
        <div className="border-b border-gray-200 pb-2">
            <h2 className="text-lg font-semibold">{heading}</h2>
        </div>
    );
};

export default Header;
