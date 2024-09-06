import React from 'react';
import { render, screen } from '@testing-library/react';
import { DateContext } from './DateContext';
import DatePreview from './DatePreview';

test('renders preview of recurring dates', () => {
    const mockContext = {
        startDate: new Date('2024-09-06'),
        endDate: new Date('2024-09-10'),
        recurrence: { type: 'Daily', interval: 1 },
    };

    render(
        <DateContext.Provider value={mockContext}>
            <DatePreview />
        </DateContext.Provider>
    );

    const dateElements = screen.getAllByText(/2024-09/);
    expect(dateElements.length).toBe(5);
});
