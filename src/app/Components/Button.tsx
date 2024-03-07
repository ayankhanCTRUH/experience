import { ReactElement } from "react";

interface ButtonTypes {
    content: string;
    type?: string;
    svg?: ReactElement;
    style?: object;
    onClick?: (e: React.MouseEvent) => void;
    size?: string;
    id?: string;
    textColor?: string;
}

const Button = ({
    content,
    type = "primary",
    svg,
    style,
    onClick,
    size = "small",
    id,
    textColor,
}: ButtonTypes) => {
    // This will return className according to conditions
    const buttonCss = () => {
        if (
            type.toLocaleLowerCase() === "primary" &&
            size.toLocaleLowerCase() === "small" &&
            content
        ) {
            return "primarySM";
        } else if (
            type.toLocaleLowerCase() === "primary" &&
            size.toLocaleLowerCase() === "regular" &&
            content
        ) {
            return "primaryRegular";
        } else if (
            type.toLocaleLowerCase() === "secondary" &&
            size.toLocaleLowerCase() === "small" &&
            content
        ) {
            return `secondarySM ${textColor ? textColor : "text-[--white-color]"
                }`;
        } else if (
            type.toLocaleLowerCase() === "secondary" &&
            size.toLocaleLowerCase() === "regular" &&
            content
        ) {
            return "secondaryRegular";
        } else {
            return "primarySmSVG";
        }
    };
    const buttonClassName = buttonCss();
    return (
        <button id={id} onClick={onClick} style={style} className={buttonClassName}>
            {svg ? svg : content}
        </button>
    );
};

export default Button;
