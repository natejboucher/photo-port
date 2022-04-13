import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..';

const toggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup)

describe('Modal component', () => {
    it('renders', () => {
    render(<Modal
        currentPhoto={currentPhoto}
        onClose={toggleModal}
        />)
    })

    it('matches snapshot DOM node structure', () =>{
        const { asFragment } = render(<Modal
            currentPhoto={currentPhoto}
            onClose={toggleModal}
            />)
        expect(asFragment()).toMatchSnapshot();
    })

    describe('Click Event', () => {
        it('calls onClose handler', () => {
          // Arrange: Render Modal
          const { getByText } = render(<Modal
            onClose={toggleModal}
            currentPhoto={currentPhoto}
          />);
          // Act: Simulate click event
          // eslint-disable-next-line testing-library/prefer-screen-queries
          fireEvent.click(getByText('Close this modal'));
          // Assert: Expected matcher
          expect(toggleModal).toHaveBeenCalledTimes(1);
        });
      })  
});