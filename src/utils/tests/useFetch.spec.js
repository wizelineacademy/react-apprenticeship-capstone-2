import { render, fireEvent, screen } from '@testing-library/react';
import useFetch from '../hooks/usefetch';
import { renderHook } from '@testing-library/react-hooks'

const urlMock = 'https://api.nasa.gov/planetary/apod?api_key=12345'
const mockResult = {
    url: 'image1.png',
    date: '2022-01-21',
    explanation: 'explanetion test',
    media_type: 'video',
    title: 'title test'
}

describe("test fetch hook", () => {
    it.skip("initial data state is loading and data empty", () => {
     const { result } = renderHook(() => useFetch(urlMock)); 
     expect(result.current).toBe({ loading: true, data: mockResult });
    });
   });




