import React from "react";
import { render, screen } from "@testing-library/react";

import HelloPage from "../HelloPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders hello page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HelloPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("hello-datatable")).toBeInTheDocument();
    expect(screen.getByRole("hello-add-button")).toBeInTheDocument();
});
