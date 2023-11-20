import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas de <GifGrid />', () => {

    const category = 'John Wick';

    test('Debe mostrar el loading inicialmente', () => {

        render(<GifGrid category={category} />);

        expect(screen.getAllByText(category));
        expect(screen.getAllByText('Cargando...'));
    });

    test('Debe mostrar items cuando se carguen imágenes desde useFetchGifs', () => {


    });

});
