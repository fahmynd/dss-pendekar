import { NavLink, NavLinkProps } from "@mantine/core"
import { useRouter } from "next/router";

interface Props extends NavLinkProps {
    path?: string
}

const NavItem = ({ path = "", ...props }: Props) => {
    const router = useRouter()

    const navigate = () => {
        if (path === "") {
            return;
        }
        router.push({
            query: {
                ...router.query,
                page: path
            }
        })
    }

    return (
        <NavLink
            {...props}
            onClick={navigate}
            styles={(theme) => {
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