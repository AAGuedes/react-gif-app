import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe('Pruebas de <GifExpertApp />', () => {

    test('Debe renderizarse el valor si no existe', () => {

        render(<GifExpertApp />);

        const input = screen.getByPlaceholderText('Buscar gifs...');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'John Wick' } });
        fireEvent.submit(form);

        expect(screen.getAllByText('John Wick')).toBeTruthy();
    });

});
