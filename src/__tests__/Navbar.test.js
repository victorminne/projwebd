import { render, screen, waitFor } from "@testing-library/react";
import App from "../app";
import Home from "../components/home/home";

describe("navbar", () => {
    describe("Test the navbar home link element", () => {
        it("should find a Home link element", async () => {
            render(<Home />, { wrapper: App });

            waitFor(async () => {
                const Nav = await screen
                    .getByTestId("home-link")
                    await expect(Nav).toBeInTheDocument();
                ;
            });
        });
    });

    describe("Test elements of the navbar page", () => {
        it("should find a Home link element", async () => {
            render(<Home />, { wrapper: App });

            waitFor(async () => {
                const Nav = await screen
                    .getByTestId("search-link")
                    expect(Nav).toBeInTheDocument();
                ;
            });
        });
    });


    describe("Test elements of the navbar page", () => {
        it("should find an about a contact link element", async () => {
            render(<Home />, { wrapper: App });

            waitFor(async () => {
                const METResponse = await screen
                    .getByTestId("contact-link")
                    await expect(METResponse).toBeInTheDocument();
                ;
            });
        });
    });

    describe("Test elements of the navbar page", () => {
        it("should find an input element", async () => {
            render(<Home />, { wrapper: App });

            waitFor(async () => {
                const METResponse = await screen
                    .getByTestId("search-input")
                    await expect(METResponse).toBeInTheDocument();
                ;
            });
        });
    });
});