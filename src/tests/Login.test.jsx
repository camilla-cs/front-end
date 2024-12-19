import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { expect } from "vitest";



const MockLogin = () => {
    return (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
}

test ('login page renders text', ()=> {
    render (<MockLogin />)
    const h3 = screen.getAllByText(/Login/i);
    const line2 = screen.getByPlaceholderText(/Email/i);
    const line3 = screen.getByPlaceholderText(/Password/i);

    waitFor(() => expect(getByText("Login")).toBeInTheDocument);
    expect(line2).toBeInTheDocument();
    expect(line3).toBeInTheDocument(); 
}); 

test ("can click Login button", () => {
    render(<MockLogin />);
    const submitButtons = screen.getAllByText("Login");

    const submitButton = submitButtons[0]; // Get the first button of the page
    fireEvent.click(submitButton);


    
})

