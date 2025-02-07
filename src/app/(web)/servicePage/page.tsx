import DoingBusiness from '@/components/doingBusiness'
import AccordionService from '@/template/web/servicePage/accordionService'
import React from 'react'

const ServicesPage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <DoingBusiness/>
        </div>
        <>
            <AccordionService/>
        </>
    </div>
  )
}

export default ServicesPage