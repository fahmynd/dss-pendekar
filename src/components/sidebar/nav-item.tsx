import { NavLink, NavLinkProps } from "@mantine/core"
import Link from "next/link";

interface Props extends NavLinkProps {
    path?: string
}

const NavItem = ({ path = "", ...props }: Props) => {
    return (
        <NavLink
            {...props}
            styles={(theme) => {
                const selectedColor = "white";
                const color = theme.colors.base[2]
                return {
                    root: {
                        ...theme.fn.hover({
                            background: theme.colors.base[7],
                            color: "white"
                        }),
                        '&[data-active]': {
                            background: theme.colors.base[7],
                            color: "white !important" 
                        },
                        fontSize: theme.fontSizes.md,
                        fontWeight: "bold",
                        color
                    },
                    
                }
            }}
        />
    )
}

export default NavItem;