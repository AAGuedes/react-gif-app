import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas de <GifItem />', () => {

    const title = 'Title';
    const url = 'https://www.localhost.es/';

    test('Debe coincidir con la snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    })

});
