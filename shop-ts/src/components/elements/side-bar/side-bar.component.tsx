import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { productsAPI } from '../../../store/products/products.api';

import {
  BaseSideElement,
  SideBarArrow,
  SideBarChildrenElement,
  SideBarContainer,
  SideElementChildrenContainer,
  SideElementWithChildren,
} from './side-bar.styles';

const SideBar = () => {
  const { data } = productsAPI.useFetchCategoriesQuery(null);
  const nav = useNavigate();

  const openChildrenContainer = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target instanceof HTMLDivElement) {
      if (e.target.children[1] instanceof HTMLDivElement) {
        e.target.children[0].classList.toggle('active');
        e.target.children[1].hidden = !e.target.children[1].hidden;
      }
    }
  };

  return (
    <SideBarContainer>
      <BaseSideElement onClick={() => nav('/')}>Home</BaseSideElement>
      <BaseSideElement onClick={() => nav('/products/1')}>
        All products
      </BaseSideElement>
      <SideElementWithChildren onClick={(e) => openChildrenContainer(e)}>
        Categories <SideBarArrow>v</SideBarArrow>
        <SideElementChildrenContainer hidden>
          {data?.map((category) => (
            <SideBarChildrenElement
              key={category.name}
              onClick={() => nav(`/category/${category.name}/1`)}
            >
              {category.name}
            </SideBarChildrenElement>
          ))}
        </SideElementChildrenContainer>
      </SideElementWithChildren>
      <BaseSideElement onClick={() => nav('/profile')}>profile</BaseSideElement>
      {/* <BaseSideElement onClick={() => nav('/settings')}>
        settings
      </BaseSideElement>
      <BaseSideElement onClick={() => nav('/about')}>about</BaseSideElement> */}
    </SideBarContainer>
  );
};

export default SideBar;
