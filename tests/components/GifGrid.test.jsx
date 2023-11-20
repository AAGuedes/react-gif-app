import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de <GifGrid />', () => {

    const category = 'John Wick';

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByText(category));
        expect(screen.getAllByText('Cargando...'));
    });

    test('Debe mostrar items cuando se carguen imágenes desde useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'John Wick',
                url: 'https://www.localhost.com/john_wick.png'
            },
            {
                id: 'DEF',
                title: 'John Wick II',
                url: 'https://www.localhost.com/john_wick_2.png'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });

});
