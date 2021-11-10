import { Link } from "react-router-dom";
import * as C from "./styles";
import { ReactComponent as ProfileIcon } from "../../svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../svgs/book.svg";
import { ReactComponent as ContactsIcon } from "../../svgs/mail.svg";
import { ReactComponent as DoneIcon } from "../../svgs/icons8-checked.svg";

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
};
export const SideBarItem = ({
    title,
    description,
    path,
    icon,
    active,
}: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === "profile" && (
                        <ProfileIcon
                            className="svg1"
                            fill="white"
                            width={24}
                            height={24}
                        />
                    )}
                    {icon === "book" && (
                        <BookIcon
                            className="svg1"
                            fill="white"
                            width={24}
                            height={24}
                        />
                    )}
                    {icon === "contacts" && (
                        <ContactsIcon
                            className="svg1"
                            fill="white"
                            width={24}
                            height={24}
                        />
                    )}
                    {icon === "done" && (
                        <DoneIcon
                            className="svg1"
                            fill="black"
                            width={24}
                            height={24}
                        />
                    )}
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
};
