// third-party
import { FormattedMessage } from 'react-intl';

// assets
import DollarOutlined from '@ant-design/icons/DollarOutlined';
import LoginOutlined from '@ant-design/icons/LoginOutlined';
import PhoneOutlined from '@ant-design/icons/PhoneOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { DollarOutlined, LoginOutlined, PhoneOutlined, RocketOutlined };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages: NavItemType = {
  id: 'group-franchises',
  title: <FormattedMessage id="Franchises" />,
  type: 'group',
  children: [
    {
      id: 'royalties',
      title: <FormattedMessage id="Royalties" />,
      type: 'item',
      url: '/franchises/royalties',
      icon: icons.DollarOutlined
    }
  ]
};

export default pages;
