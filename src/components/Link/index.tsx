import NextLink from 'next/link';
import React from 'react';

export default function Link({ children, href,...props}) {
    return (
        <NextLink href={href}>
            {children}    
        </NextLink>

    )
}