import { Link } from 'react-router-dom'
import Popover from '../popover'

export const Header = () => {
  return (
    <div className='px-12 max-w text-sm bg-[#d0011b] '>
      <div className='max-w-7xl m-auto'>
        {/* top header */}
        <div className='flex justify-end'>
          <Popover
            className='flex items-center py-1  hover:text-gray-300 cursor-pointer text-white'
            renderPopover={
              <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
                <div className='flex flex-col py-2 pr-28 pl-3'>
                  <button className='py-2 px-3 text-left hover:text-orange'>Tiếng Việt</button>
                  <button className='mt-2 py-2 px-3 text-left hover:text-orange'>English</button>
                </div>
              </div>
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
              />
            </svg>
            <span className='mx-1'>Tiếng Việt</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path className='text-xs' strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
          </Popover>
          <Popover
            className='flex items-center py-1  hover:text-gray-300 cursor-pointer text-white ml-5'
            renderPopover={
              <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
                <Link
                  to='/'
                  className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Tài khoản của tôi
                </Link>
                <Link
                  to='/'
                  className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Đơn mua
                </Link>
                <button className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'>
                  Đăng xuất
                </button>
              </div>
            }
          >
            <div className='w-5 h-5  mr-1'>
              <img
                src='https://down-vn.img.susercontent.com/file/1b34d34e639365ed7815afb832aa866e_tn'
                alt='avatar'
                className='rounded-full object-cover h-full w-full'
              />
            </div>
            <div>Beryniceeeee</div>
          </Popover>
        </div>
        {/* end top header */}

        {/* header bottom */}
        <div className=' p-5 grid grid-cols-12  mt-4 max-w-7xl m-auto  justify-center items-center'>
          <Link to='/' className='w-[10rem]  col-span-6'>
            <svg viewBox='0 0 220 44' className=''>
              <g fill='#fff' transform='translate(0 -.098)'>
                <path d='M195.78 30.899a10.49 10.49 0 0 1-6.81 2.484c-5.732 0-10.378-4.53-10.378-10.12 0-5.59 4.646-10.12 10.378-10.12 2.606 0 4.988.937 6.81 2.484.023-1.13.882-1.942 1.938-1.942 1.07 0 1.937.834 1.937 1.989v15.73c0 1.154-.868 1.98-1.937 1.98-1.07 0-1.938-.826-1.938-1.98zm-.062-7.643c0-3.588-3.024-6.497-6.755-6.497-3.73 0-6.754 2.91-6.754 6.497 0 3.588 3.024 6.498 6.754 6.498 3.73 0 6.755-2.91 6.755-6.498zM202.9 25.388V3.558c0-1.07.855-1.938 1.911-1.938s1.912.867 1.912 1.938v22.069c0 .043-.002.087-.004.13-.018 2.461.369 3.293 2.029 3.768 1.016.291 1.553 1.396 1.266 2.426-.237.854-.77 1.377-1.605 1.377h-.18c-.171 0-.347-.024-.52-.073-2.735-.783-4.904-2.78-4.81-7.867zM212.266 25.535V3.558c0-1.07.856-1.938 1.912-1.938s1.912.867 1.912 1.938V25.825c0 .082-.005.163-.015.242-.06 2.212.146 2.858 2.325 3.31 1.034.215 1.632 1.26 1.42 2.309-.186.916-.914 1.527-1.803 1.527-.127 0-.256-.013-.386-.04-2.882-.599-5.553-2.131-5.365-7.638zM97.886 24.307c.095.561.266 1.256.563 2.09 1.317 3.309 5.375 3.3 5.986 3.309 1.753.025 3.396-.331 5.011-1.223.906-.5 1.985-.412 2.556.405.572.818.395 2.028-.723 2.71-2.208 1.348-4.574 1.758-7.01 1.708-3.798-.078-7.4-1.591-9.01-5.204-.733-1.644-1.158-3.561-1.027-5.376.058-2.086.844-3.867 1.047-4.334.928-2.127 2.557-3.814 4.725-4.702 2.646-1.082 6.008-.916 8.53.43 2.936 1.566 4.571 5.136 4.41 8.384-.049.975-.799 1.803-1.817 1.803zm.412-3.333h10.906c-.86-4.592-5.845-4.37-5.845-4.37-2.52.098-4.207 1.555-5.061 4.37zM119.618 24.354c.095.561.266 1.257.563 2.09 1.318 3.31 5.376 3.3 5.986 3.31 1.753.024 3.396-.332 5.012-1.223.905-.5 1.984-.413 2.556.405.571.817.394 2.027-.723 2.71-2.209 1.347-4.574 1.758-7.011 1.707-3.797-.077-7.4-1.591-9.01-5.204-.732-1.644-1.158-3.56-1.026-5.376.058-2.085.843-3.867 1.047-4.333.928-2.127 2.557-3.815 4.725-4.702 2.645-1.083 6.007-.916 8.53.43 2.936 1.565 4.57 5.136 4.409 8.383-.049.976-.798 1.803-1.816 1.803zm.412-3.333h10.907c-.86-4.592-5.846-4.37-5.846-4.37-2.52.099-4.206 1.555-5.06 4.37zM74.109 30.871v11.367c0 2.34-3.632 2.337-3.632 0V23.806a10.064 10.064 0 0 1 0-1.329v-7.575c0-2.34 3.632-2.337 3.632 0v.51a10.537 10.537 0 0 1 6.768-2.434c5.756 0 10.422 4.55 10.422 10.164 0 5.613-4.666 10.164-10.422 10.164-2.584 0-4.947-.917-6.768-2.435zm0-7.207c.28 3.356 3.2 5.997 6.762 5.997 3.746 0 6.784-2.922 6.784-6.526 0-3.604-3.038-6.526-6.784-6.526-3.562 0-6.483 2.64-6.762 5.997zM57.09 33.306c-5.757 0-10.423-4.55-10.423-10.164s4.666-10.164 10.422-10.164 10.422 4.55 10.422 10.164c0 5.613-4.666 10.164-10.422 10.164zm-.007-3.645c3.747 0 6.784-2.922 6.784-6.526 0-3.604-3.037-6.526-6.784-6.526s-6.784 2.922-6.784 6.526c0 3.604 3.037 6.526 6.784 6.526zM28.69 15.026V2.111c0-2.337-3.631-2.34-3.631 0v29.471c0 2.337 3.631 2.341 3.631 0v-9.695c.015.364.018-.522.273-1.22.953-3.151 3.823-3.751 5.115-3.77 3.696 0 5.652 1.803 5.868 5.408V31.582c0 2.337 3.627 2.341 3.627 0v-6.126c0-1.753.106-3.676 0-4.789-.584-6.843-9.5-9.68-14.455-5.979a9.572 9.572 0 0 0-.428.338zM4.294 2.62c-2.156 1.909-3.15 5.385-2.369 8.155.678 2.4 2.66 4.27 4.803 5.323 2.222 1.09 4.676 1.673 6.564 2.505 1.32.59 2.456 1.153 3.595 2.305 1.138 1.152 1.62 2.586 1.587 3.65-.033 1.085-.441 2.182-1.023 2.869-1.487 1.755-3.889 2.414-6.106 2.303-1.572-.078-3.29-.422-4.692-1.016-1.42-.601-2.671-1.582-3.921-2.438-.807-.553-1.99-.282-2.526.631-.468.811-.098 1.92.693 2.505 2.376 1.757 4.89 3.1 7.808 3.631 2.918.532 5.463.41 8.09-.741 2.462-1.08 4.468-3.198 5.07-5.862.627-2.775-.09-5.41-1.923-7.58-2.21-2.618-5.47-3.626-8.54-4.733a24.208 24.208 0 0 1-3.295-1.423c-1.908-.973-2.883-2.363-2.75-4.528.158-2.578 2.278-3.913 4.906-4.266 2.628-.353 5.337.53 7.25 1.864 1.833 1.194 3.93-1.64 1.833-3.136C15.15-.207 8.288-.914 4.294 2.621z'></path>
                <path d='M171.002 3.338c-1.545 4.329-5.841 7.27-10.7 7.186-4.8-.084-8.954-3.103-10.394-7.412-.33-.983-1.407-1.519-2.408-1.197a1.865 1.865 0 0 0-1.217 2.364c1.946 5.823 7.526 9.879 13.954 9.991 6.505.114 12.277-3.84 14.365-9.69a1.866 1.866 0 0 0-1.17-2.39c-.993-.342-2.082.171-2.43 1.148z'></path>
                <path d='M173.191 1.8a1.98 1.98 0 0 1 1.98 1.98v27.546a1.98 1.98 0 1 1-3.96 0V3.78a1.98 1.98 0 0 1 1.98-1.98zM147.807 1.8a1.98 1.98 0 0 1 1.98 1.98v27.546a1.98 1.98 0 1 1-3.96 0V3.78a1.98 1.98 0 0 1 1.98-1.98z'></path>
                <circle cx='173.101' cy='3.691' r='2.07'></circle>
                <circle cx='147.897' cy='3.691' r='2.07'></circle>
              </g>
            </svg>
          </Link>
          <form className='col-span-5'>
            <div className='flex bg-white p-1 rounded-sm'>
              <input
                type='text'
                name='search'
                placeholder='Tìm trong Shoppe Mall'
                className='px-1 py-2 outline-none text-black w-full bg-transparent'
              />
              <button className='rounded-sm text-white bg-[#d0011b] py-2 px-4 flex-shrink-0 hover:opacity-90 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <Popover
            className='col-span-1 ml-6 text-white justify-self-start'
            renderPopover={
              <div className='relative rounded-sm border border-gray-200 bg-white shadow-md max-w-[400px] text-sm tracking-tighter'>
                <div className='p-2'>
                  <div className='text-gray-400 capitalize'>Sản phẩm mới thêm</div>
                  {/* san pham */}
                  <div className='mt-4'>
                    <div className='mt-3 flex'>
                      <div className='flex-shrink-0'>
                        <img
                          className='w-11 h-11 object-cover'
                          src='https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-ljnj3afxr2ql66'
                          alt='hình'
                        />
                      </div>

                      <div className='flex-grow ml-2 overflow-hidden'>
                        <div className='truncate'>
                          Áo Thun Tay Ngắn In Hình KYUSHUAD Original cyberpunk Đường Phố Mỹ Cổ Điển Mới Phổ Biến Cho Nam
                          Và Nữ
                        </div>
                      </div>

                      <div className='ml-2 flex-shrink-0'>
                        <span className='text-orange'>đ123.000</span>
                      </div>
                    </div>
                    <div className='mt-3 flex'>
                      <div className='flex-shrink-0'>
                        <img
                          className='w-11 h-11 object-cover'
                          src='https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-ljnj3afxr2ql66'
                          alt='hình'
                        />
                      </div>

                      <div className='flex-grow ml-2 overflow-hidden'>
                        <div className='truncate'>
                          Áo Thun Tay Ngắn In Hình KYUSHUAD Original cyberpunk Đường Phố Mỹ Cổ Điển Mới Phổ Biến Cho Nam
                          Và Nữ
                        </div>
                      </div>

                      <div className='ml-2 flex-shrink-0'>
                        <span className='text-orange'>đ123.000</span>
                      </div>
                    </div>
                    <div className='mt-3 flex'>
                      <div className='flex-shrink-0'>
                        <img
                          className='w-11 h-11 object-cover'
                          src='https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-ljnj3afxr2ql66'
                          alt='hình'
                        />
                      </div>

                      <div className='flex-grow ml-2 overflow-hidden'>
                        <div className='truncate'>
                          Áo Thun Tay Ngắn In Hình KYUSHUAD Original cyberpunk Đường Phố Mỹ Cổ Điển Mới Phổ Biến Cho Nam
                          Và Nữ
                        </div>
                      </div>

                      <div className='ml-2 flex-shrink-0'>
                        <span className='text-orange'>đ123.000</span>
                      </div>
                    </div>
                  </div>
                  {/* end san pham */}
                  <div className='mt-5'>
                    <div className=' flex justify-between items-center'>
                      <div className='text-xs tracking-tighter	'>
                        <span>2</span> Thêm Hàng Vào Giỏ
                      </div>
                      <div>
                        <button className='px-3 py-2  rounded-sm bg-[#d0011b] text-white'>Xem giỏ hàng</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Link to='/' className=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
            </Link>
          </Popover>
        </div>
        {/* end header bottom */}
      </div>
    </div>
  )
}
