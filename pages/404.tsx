import React from 'react';
import Link from '../src/components/Link';

export default function Page404() {
    return (
        <div>
            <h1>Você se perdeu e caiu na pagina 404 :O</h1>
            <Link href="/">
                Ir para a página do Home
            </Link>
        </div>
    )
}