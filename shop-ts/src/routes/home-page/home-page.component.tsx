import React from 'react';

import CategoryContainer from '../../components/elements/category-container/category-container.component';
import PopularItems from '../../components/elements/popular-items/poppular-items.component';

import {
  HomeConstainer,
  About,
  Categories,
  AllProducts,
  PopularProducts,
  Information,
} from './home-page.styles';
import {
  BackgroundImage,
  CategoryBodyConteiner,
} from '../../components/features/category-item/category-item.styles';

const HomePage = () => {
  return (
    <HomeConstainer>
      <About>About store blablabla</About>
      <Categories>
        <CategoryContainer />
      </Categories>
      <AllProducts to={'/products/1'}>
        <BackgroundImage $imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUL3b27nIEYQ0igGIfUoYJUQN6C07o7rMbHu9PG1ugzw&s' />
        <CategoryBodyConteiner>
          <h2>All Products</h2>
        </CategoryBodyConteiner>
      </AllProducts>
      <PopularProducts>
        <h2>Top Rated Products</h2>
        <PopularItems />
      </PopularProducts>
      <Information>store information and contacts</Information>
    </HomeConstainer>
  );
};

export default HomePage;
