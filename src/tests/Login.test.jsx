import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';



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
    const loginButton = screen.getAllByText(/Login/i);

    expect(loginButton).toBeInTheDocument();
    
    expect(loginButton.closest('a')).toHaveAttribute('href', '/login');
})

