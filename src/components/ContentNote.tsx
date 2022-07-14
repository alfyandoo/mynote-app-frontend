import React from 'react';
import { CardNote } from './CardNote';
import { SearchNote } from './SearchNote';

export const ContentNote = () => {
    return (
        <>
            <SearchNote />
            <div>
                <CardNote />
            </div>
        </>
    );
}