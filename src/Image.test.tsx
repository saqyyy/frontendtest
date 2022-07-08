import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Image from './Image';
import Spinner from './Spinner'
import { act } from 'react-dom/test-utils';

let observer: any

beforeEach(() => {
    global.IntersectionObserver = class {
        constructor(f: any) {
            observer = f
        }
        observe() {
        }
        unobserve() {
        }
    } as any
})

test('Image loads grey rectangle + spinner to begin with', () => {
    render(<Image title="image" src='https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL1024.jpg' loadingIcon={<Spinner />} />)

    expect(screen.queryByTitle("spinner")).toBeInTheDocument()
    expect(screen.queryByTitle("image")).toBeNull()
});

test('Image loads when it comes into view', async () => {
    render(<Image title="image" src='https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL1024.jpg' loadingIcon={<Spinner />} />)

    act(() => observer([{ isIntersecting: true }]))

    await waitFor(() => {
        expect(screen.queryByTitle("spinner")).toBeInTheDocument()
        expect(screen.queryByTitle("image")).toBeNull()
    })

    const image: SVGElement | any = screen.queryByTitle("image")
    expect(image).toBeInTheDocument()
    fireEvent.load(image)

    await waitFor(() => {
        expect(screen.queryByTitle("spinner")).toBeNull()
        expect(screen.queryByTitle("image")).toBeInTheDocument()
    })
});
