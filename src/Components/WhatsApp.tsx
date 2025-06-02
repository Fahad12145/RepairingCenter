import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatsApp = () => {
    return (
        <>
            <Link target='_blank' href="https://wa.me/+96892486614" className="fixed bottom-3 right-3 sm:bottom-7 sm:right-7 z-[999]">
                <Image
                    className={``}
                    src="/Images/whatsapp.png"
                    width={55}
                    height={55}
                    alt="WhatsApp"
                />
            </Link>
        </>
    )
}

export default WhatsApp
