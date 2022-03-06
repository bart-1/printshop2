import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

import Nav from "../../resources/js/Shared/Nav";
import { findDOMNode } from "react-dom";

const navRoutes = ["route-one", "route-two"];

test("buttons are created based strings array in props", () => {
    const { getByText, queryByText } = render(<Nav navRoutes={navRoutes} />);
    navRoutes.map((route) => {
        expect(queryByText(route)).toBeTruthy;
        fireEvent.click(screen.getByText(route));
    });
});

test("all generated btns have proper route value in a tag href attr", () => {
    const { container } = render(<Nav navRoutes={navRoutes} />);
    const a = container.querySelectorAll("a");
    navRoutes.map((route, index) => {
        const href = a[index].getAttribute("href");
        expect(href).toBe(`/${route}`);
    });
});
