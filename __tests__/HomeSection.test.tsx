import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals';

import HomeSection from '@/app/components/HomeSection'
import { it } from 'node:test'

/**test('should have Intro text', () => {
    render(<HomeSection/>) // AAA pattern: ARRANGE 

    const myElem = screen.getByText('Software Engineer') // ACT

    expect(myElem).toBeInTheDocument() //ASSERT
}) */

test('renders HomeSection with intro text and image', () => {
    render(<HomeSection />);

    // Check for heading
    const headingElement = screen.getByRole('heading', { name: /Hi, I'm Geenie!/i });
    expect(headingElement).toBeInTheDocument();

    // Check for intro text
    const introText = screen.getByText(/Software Engineer/i);
    expect(introText).toBeInTheDocument();

    // Check for image
    const image = screen.getByAltText('profile-picture');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/profile-picture.jpeg');
});