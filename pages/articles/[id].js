import React from 'react'
import {useRouter} from 'next/router';
export default function Article() {
    const router = useRouter();

    return (
        <div className="red article">
            read article {router.query.id}
        </div>
    )
}
