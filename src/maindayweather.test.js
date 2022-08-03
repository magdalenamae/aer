import { render, screen, cleanup } from '@testing-library/react';
import MainDayWeather from './maindayweather';
import AxiosMock from 'axios-mock-adapter';

test('expects day weather to display a list of objects', () => {
   
    render(<MainDayWeather />);

    const dayWeather = screen.getByTestId('city-test');
    expect(dayWeather).toBeInTheDocument();
})

test('expect a name',async () => {
    const result = await MainDayWeather(1)
    console.log(result)
    
    expect(result).toBe(result);
    expect(result.key).toBe(null);
})