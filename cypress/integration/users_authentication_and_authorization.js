describe("user authentication and admin authorization tests", () => {
    it("login as admin successfull", () => {
        cy.visit("/");

        cy.findByRole("link", {
            name: /log in/i,
        }).click();

        cy.findByRole("textbox").type("studio@dziwnykot.pl");
        cy.get("[data-cy=password]").type("1111");
        cy.get("[data-cy=submit]").click();

        cy.url().should("eq", "http://localhost:8000/start");
    });
    it("login process as admin with wrong login and password gives error message", () => {
        cy.visit("/");
        cy.findByRole("link", {
            name: /log in/i,
        }).click();

        cy.findByRole("textbox").type("studio@dziwnykoooot.pl");
        cy.get("[data-cy=password]").type("111111");
        cy.get("[data-cy=submit]").click();

        cy.url().should("eq", "http://localhost:8000/login");
        cy.findByText(/whoops! something went wrong\./i);
    });

    it("authenticated admin sees admin-tools route button", () => {
        cy.visit("/");

        cy.findByRole("link", {
            name: /log in/i,
        }).click();

        cy.findByRole("textbox").type("studio@dziwnykot.pl");
        cy.get("[data-cy=password]").type("1111");
        cy.get("[data-cy=submit]").click();

        cy.findByRole("button", { name: /admin-tools/i }).click();
        cy.url().should("eq", "http://localhost:8000/admin-tools");
    });

    it("authenticated regular user doesn't sees admin-tools route button", () => {
        cy.visit("/");

        cy.findByRole("link", {
            name: /log in/i,
        }).click();

        cy.findByRole("textbox").type("dom@dziwnykot.pl");
        cy.get("[data-cy=password]").type("1111");
        cy.get("[data-cy=submit]").click();
        cy.url().should("eq", "http://localhost:8000/start");
        cy.get("#app").find("[data-cy=start]").should("exist");
        cy.get("#app").find("[data-cy=admin-tools]").should("not.exist");
    });

    it("nav buttons route to proper pages for regular user", () => {
        cy.visit("/");
        cy.findByRole("button", { name: /printshop/i }).click();
    });
});
