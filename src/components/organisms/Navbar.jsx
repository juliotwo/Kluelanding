
import Link from 'next/link';
import { map } from 'lodash'
import Container from '../atoms/Container';
import Button from '../atoms/button';
import Image from 'next/image';

import { navData } from '@/data'

const Navbar = () => {
  return (
    <>
      <nav className='w-full px-4 md:px-0'>
        <Container className='flex justify-between py-6 items-center'>
          <div>
            <Link
              href='/'
              className='text-secondary font-black text-sm sm:text-base flex items-center'
            >
              <Image src='/images/logo.svg' width={170} height={100} alt='Klu USA Logo' className='w-20 sm:w-28 lg:w-[170px]' />
            </Link>
          </div>

          <div className='flex-1 flex justify-end items-center gap-4 sm:gap-7 tracking-wide'>
            {map(navData.links, (item, i) => <Link href={item.href} className='text-white hover:underline text-xs lg:text-sm' key={i}>{item.title}</Link>)}

            <Link href={navData.button.href}>
              <Button flatWhite className='sm:w-60 text-xs lg:text-base'>{navData.button.title}</Button>
            </Link>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
