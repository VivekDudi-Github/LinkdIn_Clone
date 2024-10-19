function InPagebox_layout({children}) {

  return (
    <>
      
        <div className=' w-full h-full  z-50  fixed left-0 top-0   bg-[#104c9a4f] text-white flex justify-center items-baseline pt-16  '>
            <span className='bg-black rounded-3xl  max-h-[80%]   w-full sm:w-2/5 sm:min-w-[500.99px]   relative   duration-200  '>
                {children}
            </span>
        </div>
      
    </>
  )
}

export default InPagebox_layout