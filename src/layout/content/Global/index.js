import React from 'react';
import style from './index.css';

const Index = () => {
  return (
    <div>
     <div className={style.header}>
       <h4 className='title2'>全局作用域</h4>
      </div>
      <div className="title2">外面的全局作用域是否生效</div>
    </div>
  )
}
export default Index;