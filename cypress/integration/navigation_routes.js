describe("navigation", () => {
    it("nav buttons route to proper pages for regular user", () => {
        cy.visit("/");
        cy.get("#app")
            .find("button")
            .each((el) => {
                el.click();
                cy.url("eq", `/${el.name}`);
            });
    });

    it("regular usuer doesn't see Admin-tools route button", () => {
        cy.visit("/");
        cy.findByRole("button", { name: /admin-tools/i }).should("not.exist");
    });

    it("admin user sees admin-tools button and button route to admin-tools page", () => {
        cy.visit("/");
        cy.findByRole("link", {
            name: /log in/i,
        }).click();

        cy.findByRole("textbox").type("studio@dziwnykot.pl");
        cy.get("[data-cy=password]").type("1111");
        cy.get("[data-cy=submit]").click();

        cy.findByRole("button", { name: /admin-tools/i }).click();
        cy.url("eq", "/admin-tools");
    });
});
