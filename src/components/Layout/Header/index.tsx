import React from 'react';

import css from './Header.module.css';

export const Header = () => (
    <header className={css['page-header']}>
        <div className={css.container}>
          <h1 className={css.header}>Поиск дешевых авиабилетов</h1>
        </div>
    </header>
);

export default Header;
