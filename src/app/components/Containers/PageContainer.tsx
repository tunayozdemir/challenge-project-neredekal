"use client"

import React from 'react'

const PageContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`'px-3 md:px-10' ${className}`} >{children}</div>
  )
}

export default PageContainer