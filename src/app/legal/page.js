'use client'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { map } from 'lodash'
import Container from "../../components/atoms/Container";
import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
import { legalData } from '@/data';

export default function Terms() {
  const descriptionRef = useRef()
  const [tabSelected, setTabSelected] = useState(0)

  useEffect(() => {
    descriptionRef.current.innerHTML = legalData.description
  }, [])

  return (
    <main>
      <Navbar dark />

      <Container className="my-20 lg:my-24 flex flex-col gap-3">
        <h1 className='text-2xl sm:text-4xl font-rocGrotesk'>{legalData.title}</h1>


        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px font-rocGrotesk text-black">
            {map(legalData.tabs, (text, i) => (
              <li className="mr-2" key={i}>
                <Link href="#" className={`inline-block p-2 border-b ${tabSelected === i ? 'border-[#573DFF]' : 'border-transparent'} rounded-t-lg`} onClick={() => setTabSelected(i)}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className='mt-2'>
          <p className='text-[#4F4F4F] leading-6 font-light' ref={descriptionRef} />
        </div>

      </Container>

      <Footer />
    </main>
  );
}

