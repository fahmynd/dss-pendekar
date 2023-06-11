import { Box, Navbar, Text, Title } from '@mantine/core';
import { BsDot } from 'react-icons/bs';
import { MENU_ITEM } from '@/constants';
import NavItem from './nav-item';
import { MenuItem } from '@/constants/menu';

type Props = {
  active?: string | null;
};

const SideBar = ({ active = null }: Props) => {
  const renderMenu = (list: MenuItem[]) => {
    return list.map((item, key) => (
      <NavItem
        active={active === item.path}
        key={key}
        path={item.path}
        label={item.title}
        icon={item.icon ? item.icon : <BsDot />}
      >
        {item.childs && renderMenu(item.childs)}
      </NavItem>
    ));
  };

  return (
    <Navbar width={{ base: 250 }} bg={'base'} pt={'xl'}>
      <Navbar.Section p={'md'}>
        <Box>
          <Title align='center' order={2} color='white'>
            PENDEKAR
          </Title>
          <Text color='#DCCD7C' size={'sm'} align='center'>
            Pemantauan Desa dan Kelurahan Terintegrasi
          </Text>
        </Box>
      </Navbar.Section>
      <Navbar.Section>
        <Text color='base.2' weight={'bold'} size={'md'} p={'sm'}>
          Menu
        </Text>
        {renderMenu(MENU_ITEM)}
      </Navbar.Section>
    </Navbar>
  );
};

export default SideBar;
