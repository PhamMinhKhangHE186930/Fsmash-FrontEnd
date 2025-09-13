import React, { useContext, useState } from 'react'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { HomeScreenContext } from '../context/HomeScreenProvider'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    categories, brands,
    setCategories
  } = useContext(HomeScreenContext);

  return (
    <header className="bg-orange-500 relative bg-opacity-80 backdrop-blur-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Fsmash</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-white">
            TRANG CHỦ
          </a>
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              SẢN PHẨM
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-0 z-10 mt-3 w-full overflow-hidden rounded-none bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                <div className={`grid ${categories.length === 2 ? 'grid-cols-2' :
                    categories.length === 3 ? 'grid-cols-3' :
                      categories.length === 4 ? 'grid-cols-4' :
                        categories.length === 5 ? 'grid-cols-5' :
                          'grid-cols-1'
                  }`}>
                  {categories.map((cate) => (
                    <div>
                      <div className='font-semibold uppercase text-orange-500 text-xl border-b-4 border-orange-500' key={cate.id}>{cate.name}</div>
                      {brands.map(brand => (
                        <Link to={`/product/${brand.id}`} key={brand.id}>
                          <div className='font-normal'>{cate.name} {brand.name}</div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-white">
            SALE OFF
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            GIỚI THIỆU
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            LIÊN HỆ
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white px-1">
            <MagnifyingGlassIcon aria-hidden="true" className="size-6 text-white" />
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white px-1">
            <UserIcon aria-hidden="true" className="size-6 text-white" />
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white px-1">
            <HeartIcon aria-hidden="true" className="size-6 text-white" />
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white px-1">
            <ShoppingBagIcon aria-hidden="true" className="size-6 text-white" />
          </a>
        </div>
      </nav>

      {/* mobile view */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Sản phẩm
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Sale Off
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Giới thiệu
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Liên hệ
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}