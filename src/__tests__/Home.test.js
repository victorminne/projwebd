import { render, screen, waitFor } from "@testing-library/react";
import App from "../app";
import Home from "../components/home/home";
import { mswServer } from "./mocks/mock-server.mock";
import { getMETResponse, getIdResponse} from "./mocks/mock-met/getMETResponse.mock";

describe("navbar", () => {
    beforeAll(() => mswServer.listen());
    afterEach(() => mswServer.resetHandlers());
    afterAll(() => mswServer.close());

    describe("Test elements of the navbar page", () => {
        it("should find an input element", async () => {
            render(<Home />, { wrapper: App });
            mswServer.use( getIdResponse);
            mswServer.use( getMETResponse);
            waitFor(async () => {
                const METResponse = await screen
                    .getByTestId("search-input")
                    await expect(METResponse).toBeInTheDocument();
                ;
            });
        });
    });
});