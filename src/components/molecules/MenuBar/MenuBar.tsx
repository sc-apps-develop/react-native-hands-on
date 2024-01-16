import React, { useState, ComponentProps } from 'react';
import { View } from 'react-native';
import { Toggle } from '../../atoms/Toggle/Toggle';
import { menuBarStyle } from './styles';

interface MenuItem {
  icon: ComponentProps<typeof Toggle>['icon'];
  onPress: () => void;
}

interface MenuBarProps {
  /**
   * メニューアイテムを指定します
   * Iconの種類と押下時の処理を与えてください
   */
  menuItems: MenuItem[];
  /**
   * 初期表示時に選択されているメニューアイテムを指定します
   */
  initialSelectedItem: number;
}

/**
 * メニューバーのコンポーネントです
 * 高さは$20固定、幅は親コンポーネントの100%です
 * アイテムは任意の数指定できますが、基本的には4つ以下としてください
 */
export const MenuBar = (props: MenuBarProps) => {
  const { menuItems, initialSelectedItem } = props;
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);
  return !!menuItems && menuItems.length > 0 ? (
    <View style={menuBarStyle.container}>
      {menuItems.map((menuItem, index) => {
        return (
          <Toggle
            value={index == selectedItem}
            type="icon"
            icon={menuItem.icon}
            onPress={() => {
              setSelectedItem(index);
              menuItem.onPress();
            }}
            key={`MenuItem_${index}`}
          />
        );
      })}
    </View>
  ) : (
    <></>
  );
};
