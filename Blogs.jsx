import React from 'react'
import Img1 from './Img1.jpg'
import Img2 from './Img2.jpg'

export default function Blogs() {
  return (
    <div className='w-full h-full bg-[#E0FAB5] py-16 px-4 text-center mx-auto font-bold py-500 sm:display-flex'>
        

        <div className='my-20 font-extrabold text-4xl text-[#222222]' >Testimonials</div>
     <div className='md:grid md:grid-cols-2 my-200 '>
        
         <div  className='md:w-[522px] md:h-[369px] mx-auto my-20 border-4 border-[#00A25A] rounded-2xl p-5 mr-[]20px'>

          <div className=' md:grid  md:grid-cols-4 justify-start'>
            <div className='md:col-span-1 w-[70px] h-[70px] md:my-[40px] md:mx-[50px] mx-[5px] my-[5px]'>
                <img className='h-[90px] w-[90px] rounded-[50%]' src={Img1}/>
            </div>
            <div className='md:col-span-3 display-flex indent-0 md:my-[40px] my-[20px] mx-[10px]'>
                <h1 className='font-extrabold text-3xl text-left font-Avenir'>Hanna Rogers</h1>
                <h1 className=' font-2xl font-medium text-left font-serif'>Head of Human Resources, CRM</h1>
               
            </div>
          </div>

          <div>
            <p className='font-normal text-left md:mx-[50px] mx-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia suscipit sunt corporis voluptas illum repellendus officiis fugiat ipsa unde. Tenetur doloremque consequuntur asperiores, dolores quidem perferendis libero laudantium quam.</p>
          </div>
         </div>
         <div  className='   md:w-[522px] md:h-[369px] mx-auto my-20 border-4 border-[#00A25A]  rounded-2xl p-5 ml-[20px]' >
          
         <div className='grid md:grid-cols-4 justify-start sm:display-flex'>
            <div className='col-span-1 w-[70px] h-[70px] md:my-[40px] md:mx-[50px] mx-[5px] my-[5px]'>
                <img className='h-[90px] w-[140px] rounded-[50%]' src={Img2}/>
            </div>
            <div className='col-span-3 display-flex indent-0 md:my-[40px] my-[20px] mx-[10px]'>
                <h1 className='font-extrabold text-3xl text-left font-Avenir'>Steve Cambell</h1>
                <h1 className=' font-2xl font-medium text-left font-serif'>Program Manager, UPS</h1>
               
            </div>
          </div>

          <div>
            <p className='font-normal text-left md:mx-[50px] mx-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia suscipit sunt corporis voluptas illum repellendus officiis fugiat ipsa unde. Tenetur doloremque consequuntur asperiores, dolores quidem perferendis libero laudantium quam.</p>
          </div>

         </div>
        </div>    
        
    </div>
  )
}
