import { Avatar, Box, Burger, Group, Header, Menu, Text } from "@mantine/core";
import { BsBoxArrowRight } from "react-icons/bs";

// TODO: Handle burger menu and user profile
const DashboardHeader = () => {
    return (
        <Header p={"sm"} height={60}>
            <Group position="apart">
                <Group>
                    <Burger
                        opened={false}
                        styles={theme => {
                            return {
                                burger: {
                                    backgroundColor: theme.colors.base[1]
                                }
                            }
                        }}
                    />
                </Group>
                <Group>
                    <Avatar radius={"xl"} src={"https://mitrasulawesi.id/wp-content/uploads/2022/10/IMG_20221014_232402.jpg"} />
                    <Menu>
                        <Menu.Target>
                            <Text style={{cursor: "pointer"}}>Muslimin Bando</Text>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>
                                <Box px={"lg"}>
                                    <Text size={"lg"}>Muslimin Bando</Text>
                                    <Text color="grey">Bupati Enrekang</Text>
                                </Box>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item icon={<BsBoxArrowRight />}>
                                <Text>Keluar</Text>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Group>
        </Header>
    )
}

export default DashboardHeader;