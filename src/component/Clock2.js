import React from 'react';
import Calendar from 'react-icons/lib/fa/calendar'

export const Clock2 = ({date = new Date()}) => (
    <div>
        <h2><Calendar/>{date.toLocaleTimeString()} and I'm STATELESS</h2>
    </div>
)