import React from 'react';
import './index.css';

// index.css 文件 启用 css module
// index.css 编译，在js中使用 .title 样式失效

const Header = () => {
    return (
        <div className='title'>Header</div>
    )
}

export default Header;