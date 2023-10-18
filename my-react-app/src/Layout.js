import React from 'react';
import styles from './Layout.css'

function Layout() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">CSS Layout Workshop</h1>
    <p className="mb-4">Try to get the unstyled items to look like the styled ones</p>
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg m-2">
        <div className=' bg-blue-50'>Item 1</div>
        <div className=' bg-blue-100'>Item 2</div>
        <div className=' bg-blue-200'>Item 3</div>
        <div className=' bg-blue-300'>Item 4</div>
        <div className=' bg-blue-400'>Item 5</div>
        <div className=' bg-blue-500'>Item 6</div>
      </div>

      <div className="example1">
      {/* <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg flex m-2 justify-between"> */}
        <div className='box bg-blue-50'>Item 1</div>
        <div className='box bg-blue-100'>Item 2</div>
        <div className='box bg-blue-200'>Item 3</div>
        <div className='box bg-blue-300'>Item 4</div>
        <div className='box bg-blue-400'>Item 5</div>
        <div className='box bg-blue-500'>Item 6</div>
      </div>

      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg m-2">
        <div className=' bg-blue-50'>Item 1</div>
        <div className=' bg-blue-100'>Item 2</div>
        <div className=' bg-blue-200'>Item 3</div>
        <div className=' bg-blue-300'>Item 4</div>
        <div className=' bg-blue-400'>Item 5</div>
        <div className=' bg-blue-500'>Item 6</div>
        <div className=' bg-blue-600'>Item 7</div>
        <div className=' bg-blue-700'>Item 8</div>
        <div className=' bg-blue-800'>Item 9</div>
      </div>

      <div className="example2">
        {/* <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg flex flex-wrap m-2 justify-between"> */}
        <div className='box bg-blue-50'>Item 1</div>
        <div className='box bg-blue-100'>Item 2</div>
        <div className='box bg-blue-200'>Item 3</div>
        <div className='box bg-blue-300'>Item 4</div>
        <div className='box bg-blue-400'>Item 5</div>
        <div className='box bg-blue-500'>Item 6</div>
        <div className='box bg-blue-600'>Item 7</div>
        <div className='box bg-blue-700'>Item 8</div>
        <div className='box bg-blue-800'>Item 9</div>
      </div>
    </div>
  );
}

export default Layout;
