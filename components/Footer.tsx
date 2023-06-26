import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link';

type ColumnProps = {
    title: string;
    links: Array<string>;


}

const FooterColumn = ({ title, links }: 
ColumnProps) => (
<div className="footer_colum ">
    <h4 className="font-semibold">Legal</h4>
    <ul className="flex flex-col gap-2 
    font-normal
    ">
{links.map((link) => <Link href="/" key={link}>{link}</Link>)}
    </ul>
</div>
)


const Footer = () => {
  return (
    <div>
      <footer className="flexStart footer">
        <div className="flex flex-col gap-12
        w-full
        ">
        <div className="flex items-start 
        flex-col
        ">
        <Image 
        src="/logo.svg"
        width={115}
        height={38}
        alt="Skyline Web Tech"
        />
        <p className="text-start text-sm
        font-normal mt-5 max-w-xd
        ">Skyline Web Tech Is An A.I Blog</p>
        </div>
        <div className="flex flex-wrap gap-12">
         <FooterColumn title={footerLinks[0].
        title} links={footerLinks[0].links}
         
         />
        <div className="flex-1 flex flex-col gap-4">
        <FooterColumn title={footerLinks[1].
        title} links={footerLinks[1].links}
         
         />
        </div>
        <FooterColumn title={footerLinks[3].
        title} links={footerLinks[3].links}
         
         />
        
        </div>
        
        </div>
        <div className="flexBetween
        footer_copyright
        ">
<p>@2023 Skyline Web Tech. All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
